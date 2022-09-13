import { useCallback, useState, FormEvent } from "react";
import Image from "next/image";
import { useContactMutation } from "src/graphql/generated";
import { Container, Input, TextArea, Button } from "..";
import { FiLoader } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styles";
import { useAnalytics } from "src/hooks/useAnalytics";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [submit, { loading }] = useContactMutation();
  const { joinGroup } = useAnalytics();

  const notify = (
    message: string,
    type: "error" | "success" | "warning" | "info"
  ) =>
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      containerId: "toast-container"
    });

  const handleSubimitContact = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();

        await Promise.all([
          submit({
            variables: {
              description,
              email,
              name
            }
          }),
          joinGroup({
            description,
            email,
            name
          })
        ]);

        setName("");
        setEmail("");
        setDescription("");
        notify("Email successfully sent", "success");
      } catch (error) {
        notify("Error sending the e-mail", "error");
      }
    },
    [submit, description, email, name]
  );

  return (
    <S.Contact id="contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        containerId="toast-container"
      />

      <Container className="contact-container">
        <div>
          <Image
            src="/assets/img/Programming-amico.svg"
            alt="image illustrates a programmer programming"
            width={600}
            height={600}
          />
        </div>

        <div>
          <form onSubmit={handleSubimitContact}>
            <h1>Get In Touch</h1>
            <div className="input-group">
              <Input
                type="text"
                label="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <TextArea
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div>
              <Button
                title={!loading ? "Submit" : ""}
                variant="dark"
                size="medium"
                borderColor="#FFFFFF"
                style={{
                  background: "#151515",
                  pointerEvents: loading ? "none" : "all"
                }}
                disabled={loading}
                icon={loading && <FiLoader size={24} />}
              />
            </div>
          </form>
        </div>
      </Container>
    </S.Contact>
  );
};
