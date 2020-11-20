import React from 'react'
import { Form, Button, Section } from 'react-bulma-components';

const { Input, Field, Control, Label } = Form;

const TipForm = (props) =>
    <Section>
    <form onSubmit={props.addTip}>
        <Field>
            <Label>Title:</Label>
            <Control>
                <Input value={props.newTitle}
            onChange={props.handleTitleChange} />
            </Control>
        </Field>        
        <Control>
            <Button type="submit" color="primary">create</Button>
        </Control>
    </form>
    </Section>

export default TipForm 