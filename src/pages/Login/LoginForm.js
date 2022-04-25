import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  FormContainer,
  Form,
  ImageContainer,
  Image,
  ErrorContainer,
  Error,
  ButtonContainer,
} from "./styles";
import { PageContainer, Button, Link } from "styles/theme";
import logo from "assets/logo.png";

export const LoginForm = ({ onSubmit, error, loading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <PageContainer>
      <Container>
        <FormContainer>
          <ImageContainer>
            <Image src={logo} alt="vank" />
          </ImageContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input type="email" placeholder="Email" {...field} />
                )}
              />
              {errors.email && <span>This field is required</span>}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="password"
                    type="password"
                    placeholder="*********"
                    {...field}
                  />
                )}
              />
              {errors.password && <span>This field is required</span>}
            </FormGroup>
            <ErrorContainer>{error && <Error>{error}</Error>}</ErrorContainer>

            <ButtonContainer>
              <Link to="/signup">Registrarse</Link>
              <Button type="submit" color="primary" disabled={loading}>Ingresar</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </PageContainer>
  );
};
