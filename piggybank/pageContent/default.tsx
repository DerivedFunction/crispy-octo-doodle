import Image from "next/image";
import React from "react";

export default function content() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
        <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
          <Image src="/piggywin.svg" height={240} width={240} alt={"piggy"} />
        </div>

        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Default page
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              gravida, urna ullamcorper rutrum auctor, augue tortor luctus dui,
              sed auctor neque tortor sed ex. Quisque semper turpis turpis, id
              condimentum ligula tincidunt non. Aenean condimentum lorem ut
              ultricies auctor. Curabitur porttitor mauris nec diam accumsan,
              sit amet blandit lacus tristique. Nullam eu massa nisi. Donec
              rhoncus malesuada rhoncus. Etiam elementum pretium tortor, nec
              dictum mauris. Nam quam enim, bibendum et ornare vitae, mattis a
              nisl. Duis vel sem ac mauris placerat suscipit non id eros. Cras
              tellus eros, feugiat in risus eu, pretium dapibus nisl. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Header
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              gravida, urna ullamcorper rutrum auctor, augue tortor luctus dui,
              sed auctor neque tortor sed ex. Quisque semper turpis turpis, id
              condimentum ligula tincidunt non. Aenean condimentum lorem ut
              ultricies auctor. Curabitur porttitor mauris nec diam accumsan,
              sit amet blandit lacus tristique. Nullam eu massa nisi. Donec
              rhoncus malesuada rhoncus. Etiam elementum pretium tortor, nec
              dictum mauris. Nam quam enim, bibendum et ornare vitae, mattis a
              nisl. Duis vel sem ac mauris placerat suscipit non id eros. Cras
              tellus eros, feugiat in risus eu, pretium dapibus nisl. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
            Header2
          </h1>

          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              gravida, urna ullamcorper rutrum auctor, augue tortor luctus dui,
              sed auctor neque tortor sed ex. Quisque semper turpis turpis, id
              condimentum ligula tincidunt non. Aenean condimentum lorem ut
              ultricies auctor. Curabitur porttitor mauris nec diam accumsan,
              sit amet blandit lacus tristique. Nullam eu massa nisi. Donec
              rhoncus malesuada rhoncus. Etiam elementum pretium tortor, nec
              dictum mauris. Nam quam enim, bibendum et ornare vitae, mattis a
              nisl. Duis vel sem ac mauris placerat suscipit non id eros. Cras
              tellus eros, feugiat in risus eu, pretium dapibus nisl. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
