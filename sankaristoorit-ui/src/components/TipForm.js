import React from 'react'
import { Form, Button, Section, Heading } from 'react-bulma-components'

const { Input, Field, Control, Label } = Form

const TipForm = (props) =>
  <Section>
    <Heading subtitle size={3}>
          Create a new tip
    </Heading>
    <form onSubmit={props.addTip}>
      <Field>
        <Label>Title:</Label>
        <Control>
          <Input id="title" value={props.newTitle}
            onChange={(event) => props.handleTitleChange(event)}
            disabled={props.disabled} />
        </Control>
        <Label>Url:</Label>
        <Control>
          <Input id="url" value={props.newUrl}
            onChange={(event) => props.handleUrlChange(event)} placeholder={'e.g. https://github.com/tkt-sankarikoodaajat-2020/sankaristoorit'}
            disabled={props.disabled} />
        </Control>
      </Field>
      <Control>
        <Button id="create-button" type="submit" color="primary" disabled={props.disabled}>Create</Button>
      </Control>
    </form>
  </Section>

export default TipForm