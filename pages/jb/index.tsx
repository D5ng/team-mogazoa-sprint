// import { useForm } from 'react-hook-form'
// import {
//   Button,
//   Form,
//   ImageInput,
//   TextareaInput,
//   TextFieldInput,
// } from '@shared/ui'

// export default function () {
//   const { register, setValue, watch, handleSubmit } = useForm()

//   const textBoxValue = watch('textBoxInput')

//   const onSubmit = handleSubmit((data) => {
//     console.log(data)
//   })

//   return (
//     <Form onSubmit={onSubmit} className="flex flex-col gap-5 p-10">
//       <div className="flex gap-5 h-40">
//         <div className="flex flex-col flex-grow gap-5 max-w-full h-full">
//           <TextFieldInput
//             placeholder="상품명"
//             {...register('textFieldInput')}
//             setValue={setValue}
//           />
//           <TextFieldInput
//             placeholder="카테고리 선택"
//             {...register('category')}
//             setValue={setValue}
//           />
//         </div>
//         <ImageInput {...register('productImage')} setValue={setValue} />
//       </div>
//       <TextareaInput
//         {...register('textBoxInput')}
//         value={textBoxValue}
//         placeholder="상품 설명을 입력해주세요"
//       />
//       <Button variant="primary" type="submit">
//         추가하기
//       </Button>
//     </Form>
//   )
// }
