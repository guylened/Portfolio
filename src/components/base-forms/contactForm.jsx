import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient.js";
import { Field } from "./fields.jsx";
import { Button } from "../buttons.jsx";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendMessage = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    const newMessageData = {
      name: name,
      email: email,
      topic: topic,
      message: message,
    };
    const { error } = await supabase
      .from("Message")
      .insert([newMessageData])
      .single();
    if (error) {
      setErrorMessage(
        "Une erreur est survenue, veuillez réessayer ultérieurement"
      );
    } else {
      setSuccessMessage("Votre message a bien été envoyé !");
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
    }
  };

  useEffect(() => {
    if (errorMessage || successMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
      className="container flex flex-col justify-start items-start gap-4 mx-auto"
    >
      <Field type={1} onChange={(e) => setName(e.target.value)} value={name} />

      <Field
        type={2}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Field
        type={4}
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
      />
      <Field
        type={5}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      {errorMessage && (
        <p className="font-prompt font-medium text-pop-primary dark:text-pop-secondary">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p className="font-prompt font-medium text-drk-primary dark:text-lght-primary">
          {successMessage}
        </p>
      )}
      <Button type={2} value="Envoyer" />
    </form>
  );
};
