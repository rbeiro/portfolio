import { SyntheticEvent } from 'react'
import { WhatsAppLogoIcon } from '../../../components/BrandIcons'
import { Input, TextArea } from '../../../components/Input'

export function Portuguese() {
  function handleMessageSubmit(e: SyntheticEvent) {
    e.preventDefault()
    console.log('Form submit')
  }
  return (
    <div className="flex h-full flex-col">
      <h1 className="mb-12 sm:mb-6 sm:text-center md:mb-6">Contato</h1>
      <div className="m-auto flex max-w-[80%] flex-1 flex-col gap-4 sm:max-w-[90%] md:max-w-[90%]">
        <p>
          Deixe uma mensagem ou entre em contato diretamente pelo WhatsApp que
          responderei assim que possível!
        </p>
        <form onSubmit={handleMessageSubmit} className="flex flex-col gap-4">
          <Input labelName="Nome" />
          <Input labelName="E-mail" />
          <Input labelName="Assunto" />
          <TextArea
            className=" resize-none"
            maxLength={280 * 3}
            rows={5}
            labelName="Sua mensagem"
          />
        </form>

        <span
          className="mx-auto flex w-full items-center justify-between opacity-40
        before:block before:h-[1px] before:w-[calc(50%-20px)] before:bg-[var(--color-gray9)] before:content-['']
        after:block after:h-[1px] after:w-[calc(50%-20px)] after:bg-[var(--color-gray9)] after:content-['']
        "
        >
          ou
        </span>

        <a
          className="flex cursor-pointer items-center justify-center gap-1 rounded-md bg-[hsl(142,45%,49%)]
        py-3 px-4"
          href="https://wa.me/+5515991689366"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppLogoIcon size={18} color="var(--color-text)" />{' '}
          <span className="text-center font-bold">
            Entre em contato pelo WhatsApp!
          </span>
        </a>
      </div>
    </div>
  )
}
