import React, { useContext } from "react";
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
  FormDivider,
} from "./styles";
import { PageContainer, Button, Link } from "styles/theme";
import { Context } from "context/Context";
import logo from "assets/logo.png";

export const SignUpForm = ({ onSubmit, error, loading }) => {
  const {
    email,
    businessName,
    currency,
    monthlyRequest,
    taxIdentificationNumber,
    bankInformation,
    token,
  } = useContext(Context);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email || "",
      businessName: businessName || "",
      currency: currency || "",
      monthlyRequest: monthlyRequest || 0,
      taxIdentificationNumber: taxIdentificationNumber || "",
      password: "",
      passwordCheck: "",
      bankInformation: bankInformation || 0,
    },
  });

  return (
    <PageContainer>
      <Container edit={token}>
        <FormContainer edit={token}>
          {!token && (
            <ImageContainer>
              <Image src={logo} alt="vank" />
            </ImageContainer>
          )}
          <Form edit={token} onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="email"
                    type="email"
                    disabled={token}
                    placeholder="Email"
                    {...field}
                  />
                )}
              />
              {errors.email && <Error>This field is required</Error>}
            </FormGroup>
            {!token && (
              <>
                <FormGroup>
                  <Label for="password">Contraseña</Label>
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
                  {errors.password && <Error>This field is required</Error>}
                </FormGroup>
                <FormGroup>
                  <Label for="passwordCheck">Repetir contraseña</Label>
                  <Controller
                    name="passwordCheck"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        id="passwordCheck"
                        type="password"
                        placeholder="*********"
                        {...field}
                      />
                    )}
                  />
                  {errors.passwordCheck && (
                    <Error>This field is required</Error>
                  )}
                </FormGroup>
              </>
            )}
            <FormDivider />
            <FormGroup>
              <Label for="businessName">Nombre de la compañía</Label>
              <Controller
                name="businessName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Empresa S.A"
                    {...field}
                  />
                )}
              />
              {errors.businessName && <Error>This field is required</Error>}
            </FormGroup>
            <FormGroup>
              <Label for="currency">Moneda</Label>
              <Controller
                name="currency"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input {...field} id="currency" name="currency" type="select">
                    <option value={"CLP"}>CLP</option>
                    <option value={"USD"}>USD</option>
                    <option value={"EUR"}>EUR</option>
                  </Input>
                )}
              />
              {errors.currency && <Error>This field is required</Error>}
            </FormGroup>

            <FormGroup>
              <Label for="monthlyRequest">Quota de peticiones</Label>
              <Controller
                name="monthlyRequest"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="monthlyRequest"
                    type="number"
                    placeholder="300"
                    {...field}
                  />
                )}
              />
              {errors.monthlyRequest && <Error>This field is required</Error>}
            </FormGroup>
            <FormGroup>
              <Label for="taxIdentificationNumber">ID Tributario</Label>
              <Controller
                name="taxIdentificationNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="taxIdentificationNumber"
                    type="text"
                    placeholder="ID"
                    {...field}
                  />
                )}
              />
              {errors.taxIdentificationNumber && (
                <Error>This field is required</Error>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="bankInformation">Información bancaria</Label>
              <Controller
                name="bankInformation"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    id="bankInformation"
                    type="text"
                    placeholder="0"
                    {...field}
                  />
                )}
              />
              {errors.bankInformation && <Error>This field is required</Error>}
            </FormGroup>

            <ErrorContainer>
              {error && typeof error === "object" ? (
                error.map((row, index) => <Error key={index}>- {row}</Error>)
              ) : (
                <Error>{error}</Error>
              )}
            </ErrorContainer>

            <ButtonContainer>
              {!token && <Link to="/">Volver</Link>}
              <Button type="submit" color="primary" disabled={loading}>
                Confirmar
              </Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </PageContainer>
  );
};
