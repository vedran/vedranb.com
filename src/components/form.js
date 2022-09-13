import React, { useRef, useState } from "react"
import * as containerStyles from "./form.module.css"

const Form = () => {
  const formRef = useRef(null)
  const [formSubmitResult, setFormSubmitResult] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbz1Riu2mbeWqcoa9jt0n7cU1win6qYbZq7eirI2TQUy1eWConHZyLC1wOqrxGUSAJUPBg/exec"

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then(res => {
        setFormSubmitResult("success")
      })
      .catch(err => {
        console.error(err)
        setFormSubmitResult("fail")
      })
  }

  return (
    <div className={containerStyles.formWrapper}>
      <form method="post" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <input type="email" name="email" placeholder="Email address" />
          <input type="submit" name="submit" value="Subscribe" />
        </div>
      </form>
      {formSubmitResult === "success" && (
        <div className={containerStyles.message}>Thanks for subscribing!</div>
      )}
      {formSubmitResult === "fail" && (
        <div className={containerStyles.message}>Error subscribing</div>
      )}
    </div>
  )
}

export default Form
