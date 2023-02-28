import React from "react";
import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";

import useVisualMode from "../../hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(response => {
        console.log(response)
        transition(SHOW);
      })
  }

  function cancel() {
    const interview = null;

    transition(DELETING);

    props.cancelInterview(props.id, interview)
      .then(response => {
        console.log(response)
        transition(EMPTY);
      })

    
  }

  console.log("props:", props);
  return (
    <article className="appointment">
      <Header time={props.time}></Header>

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props?.interview?.student}
          interviewer={props?.interview?.interviewer?.name}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && 
        <Form
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
      />}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
      {mode === CONFIRM && <Confirm onCancel={back} onConfirm={cancel} />}

    </article>
  );
}
