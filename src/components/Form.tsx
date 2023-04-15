import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IDate, dateSchema } from "./Card";

export interface IFormProps {
  setDate: Function;
  setIsDirty: Function;
}

const initialInputState = { day: undefined, month: undefined, year: undefined };

export default function Form({ setDate, setIsDirty }: IFormProps) {
  const [errors, setErrors] = useState<any>([]);
  const [input, setInput] = useState<IDate>(initialInputState);

  useEffect(() => {
    const result = dateSchema.safeParse(input);
    if (!result.success) {
      setErrors(result.error.issues);
      setDate(null);
      setIsDirty(false);
    } else setErrors([]);

    if (result.success && input.day && input.month && input.year) {
      setDate(new Date(`${input.month}-${input.day}-${input.year}`));
      setIsDirty(true);
    }
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: Number(value) });
  };

  const isNotValid = (name: string) => {
    return (
      errors.filter((error: any) => error.path.includes(name)).length !== 0
    );
  };

  return (
    <>
      <FormContainer>
        <FlexRows>
          <Label htmlFor="day">DAY</Label>
          <Input
            className={isNotValid("day") ? "error" : ""}
            name="day"
            id="day"
            type="number"
            min={1}
            max={31}
            placeholder="DD"
            value={input.day || ""}
            onChange={handleChange}
          />
        </FlexRows>
        <FlexRows>
          <Label htmlFor="month">MONTH</Label>
          <Input
            className={isNotValid("month") ? "error" : ""}
            name="month"
            id="month"
            type="number"
            min={1}
            max={12}
            placeholder="MM"
            value={input.month || ""}
            onChange={handleChange}
          />
        </FlexRows>
        <FlexRows>
          <Label htmlFor="year">YEAR</Label>
          <Input
            className={isNotValid("year") ? "error" : ""}
            name="year"
            id="year"
            type="number"
            min={100}
            max={2023}
            placeholder="YYYY"
            value={input.year || ""}
            onChange={handleChange}
          />
        </FlexRows>
      </FormContainer>
      <ErrorsWrapper>
        {errors.length > 0 &&
          errors.map((error: any, index: string) => (
            <ErrorMessage key={index}>{error.message}</ErrorMessage>
          ))}
      </ErrorsWrapper>
    </>
  );
}

const FormContainer = styled.form.attrs((props) => ({
  className: props.className,
}))`
  grid-area: form;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  .error {
    outline: 1px solid hsl(0, 100%, 67%);
  }
  .error:focus {
    outline: 1px solid hsl(0, 100%, 67%);
  }
`;

const FlexRows = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex-direction: column;
`;

const Label = styled.label`
  color: hsl(0, 1%, 44%);
  letter-spacing: 0.1rem;
  font-family: "Poppins Regular";
  font-size: 0.5rem;
  font-weight: 700;
`;

const Input = styled.input`
  min-width: 5rem;
  max-width: 6rem;
  padding: 0.5rem 1rem;
  outline: 0.3px solid hsl(0, 0%, 86%);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  color: hsl(0, 1%, 44%);
  ::placeholder {
    color: hsl(0, 1%, 44%);
    font-weight: 900;
  }
  &:focus {
    outline: 1px solid hsl(259, 100%, 65%);
  }
`;

const ErrorsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 2rem);
  left: 50%;
  transform: translate(-65%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorMessage = styled.p`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-family: "Poppins Regular";
  font-size: 0.8rem;
  color: white;
  background-color: hsl(0, 100%, 67%);
`;
