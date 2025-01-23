import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'
// A função useForm da biblioteca react-hook-form faz a gestão de inputs controlled e uncontrolled melhor que o React.
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'

// A biblioteca não possui o export default, logo utilizamos o * as zod.
import * as zod from 'zod'
import { useEffect, useState } from 'react'

import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Valor mínimo é de 5 minutos')
    .max(60, 'Valor máximo é de 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null) // guarda o id do cyclo que está ativo.
  const [amountSecondPassed, setAmountSecondPassed] = useState(0) // Essa variável armazena quantos segundos já se passaram desde que o ciclo se iniciou.

  /*
    A função register retorna vários atributos dos inputs, como name, max, min, ref, required, onChange,disable, etc.
    A função handleSubmit recebe uma função que 
    A função watch fica observando se houveram alterações no valor do input.
    O useForm/resolver recebe um objeto com as regras de validação
  */
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')
  const isSubmitDisable = !task

  // Mostrar o ciclo ativo
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }
  }, [activeCycle])

  // Função que recebe o data que possui os atributos dos inputs
  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset() // A função reset do useForm é utilizada para resetar os valores dos inputs com o conteúdo definido no default value. Lembre de declarar todos os inputs.
  }

  const totalSeconds = activeCycle ? activeCycle?.minutesAmount * 60 : 0 // Se existir um ciclo ativo calcula quantos segundos ele representa
  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60) // Descobrir quantos minutos ainda faltam.
  const secondsAmount = currentSeconds % 60 // Pegar os segundos que restam da divisão.
  // Converter minutos e segundos para string e adicionar um zero no inicio se o número for menor adiciona um zero
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')} // permite recuperar todos os atributos do elemento input.
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Outro projeto" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })} // A segunda propriedade permite converter o tipo para número.
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          {/* Os minutos e segundos foram convertidos para string, logo podem ser acessados como vetores. */}
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
