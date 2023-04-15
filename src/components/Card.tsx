import { useEffect, useState } from "react";
import { z } from "zod";

import styled from "styled-components";
import Form from "./Form";
import { calculateTimeBeetweenDates } from "../services/utils";

export interface ICardProps {}

export const dateSchema = z.object({
  day: z
    .number()
    .min(1, "Day must be between 1 and 12")
    .max(31, "Day must be between 1 and 12")
    .optional(),
  month: z
    .number()
    .min(1, "Month must be between 1 and 12")
    .max(12, "Month must be between 1 and 12")
    .optional(),
  year: z
    .number()
    .min(100, "Year must be between 100 and 2023")
    .max(2023, "Year must be between 100 and 2023")
    .optional(),
});

export type IDate = z.infer<typeof dateSchema>;

export const initialResultState = { day: 0, month: 0, year: 0 };

export default function Card(props: ICardProps) {
  const [date, setDate] = useState<Date | null>(null);
  const [results, setResults] = useState<IDate>(initialResultState);
  const [isDirty, setIsDirty] = useState<Boolean>(false);

  console.log(date);

  useEffect(() => {
    if (date) setResults(calculateTimeBeetweenDates(new Date(), date));
    if (date === null) setResults((prev) => initialResultState);
  }, [date]);

  return (
    <Container>
      <Form setDate={setDate} setIsDirty={setIsDirty} />
      <Divider>
        <IconContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </IconContainer>
      </Divider>
      <ResultContainer>
        <ResultText>
          <span>{isDirty ? results.year : "--"}</span>years
        </ResultText>
        <ResultText>
          <span>{isDirty ? results.month : "--"}</span>months
        </ResultText>
        <ResultText>
          <span>{isDirty ? results.day : "--"}</span>days
        </ResultText>
      </ResultContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 3rem 2fr;
  grid-template-areas:
    "form ."
    "divider divider"
    "result .";
  background-color: white;
  width: 400px;
  height: 350px;
  padding: 2rem;
  border-radius: 15px 15px 100px 15px;
  align-items: center;
`;

const Divider = styled.div`
  grid-area: divider;
  position: relative;
  width: 100%;
  height: 1px;
  background-color: hsl(0, 0%, 86%);
`;

const ResultContainer = styled.div`
  grid-area: result;
  display: flex;
  flex-direction: column;
`;

const ResultText = styled.p`
  font-family: "Poppins Regular";
  font-size: 3rem;
  font-weight: 800;
  font-style: italic;
  line-height: 3.4rem;
  > span {
    color: hsl(259, 100%, 65%);
    margin-right: 0.5rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  background-color: hsl(259, 100%, 65%);
  border-radius: 50%;
  padding: 1rem;
  transform: scale(0.6) translate(33%, -80%);
`;
