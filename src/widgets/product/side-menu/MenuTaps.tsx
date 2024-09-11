export default function MenuTaps({ ...props }) {
  return (
    <label className="flex w-[200px] tablet:w-[160px]">
      <input type="radio" name="sidemenu" className=" peer appearance-none " />
      <span className="flex items-center w-[200px] tablet:w-[160px] h-[50px] tablet:h-[45px]  cursor-pointer px-[20px] py-[15px] text-[16px] tablet:text-[14px] text-black-20 hover:text-white hover:border hover:border-black-30 hover:bg-black-20  rounded-md hover:bg-opacity-10 peer-checked:text-white peer-checked:border peer-checked:border-black-30 peer-checked:bg-black-20 peer-checked:bg-opacity-10">
        {props.children}
      </span>
    </label>
  )
}