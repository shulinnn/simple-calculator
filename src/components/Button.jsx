export default function Button(props) {
  return (
    <>
      <div
        className={`h-[70px] rounded-full bg-white shadow-md flex justify-center items-center pb-1 font-roboto text-2xl font-semibold ${
          props.isLong ? "col-span-9" : "col-span-3 w-[70px]"
        }`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </>
  );
}
