import { useState } from "react";
import GlobalButton from "./reUser/GlobalButton";
import Input from "./reUser/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonBuild from "./build/ButtonBuild";
import FormInput from "./build/FormInput";
import MagixInput from "./build/MagixInput";

const HomeScreen = () => {
  const [state, setState]: any = useState();
  const [data, setData]: any = useState<string>("");

  const yupSchema = yup.object({
    email: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmitted = handleSubmit((data) => {
    console.log(data);
    console.log(state);
  });

  return (
    <div className="w-full">
      <div className="grid w-full lg:grid-cols-3 gap-2 grid-cols-2 ">
        <div className=" text-black rounded-md p-4 border">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis
           pariatur necessitatibus tempore quo rem quis voluptates laudantium, incidunt
            ex commodi odit enim magni. Non repudiandae itaque blanditiis minus veniam?
        </div>
        {/* <div className="h-[250px]  text-black rounded-md p-4">
          start
        </div> */}
        {/* <div
          className="border text-white rounded-md 
      col-span-3 lg:col-span-1 grid gap-2  
      "
        >
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
        </div> */}
      </div>

      <div className="mt-8 w-full grid grid-flow-row  grid-cols-1 md:grid-cols-5  gap-2 text-white">
        <div className="bg-white p-4 border rounded-md col-span-3 h-[150vh]">

          
          <br />

          <form onSubmit={onSubmitted}>
            <Input
              {...register("email")}
              placeholder="Search Article"
              value={state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            >
              .
            </Input>
            <GlobalButton
              intents={"secondary"}
              type="submit"
              // onClick={() => {
              //   console.log(state);
              // }}
            >
              submit
            </GlobalButton>
          </form>
          <br />
          <br />
          <br />
          <hr />
          <br />
          
        </div>
        {/* <div className=" sticky top-2 bg-purple-500 col-span-2 p-4 border rounded-md h-[550px]">
          <div>
            <div>testing this props</div>
            <br />
            <br />

            <hr />
            <br />

            <ButtonBuild>button</ButtonBuild>
            <ButtonBuild className="bg-red-500 hover:bg-red-600 ">
              button
            </ButtonBuild>
            <ButtonBuild className="bg-black hover:bg-neutral-700 ">
              button
            </ButtonBuild>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div>hh</div>
          <FormInput>start</FormInput> <br />
          <br />
          <hr />
          <br />
          <MagixInput
            valueData={data}
            onChange={(e: any) => {
              setData(e.target.value);
            }}
            // className="border-blue-400 "
            basedColor2="border-blue-400"
            basedColor="border-red-600"
          >
            Let's do this
          </MagixInput>{" "}
          <div>data: {data}</div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeScreen;
