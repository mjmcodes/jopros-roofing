import sgMail from "@sendgrid/mail";
import { useForm } from "react-hook-form";

const ContactForm = ({ services = [] }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const handleFormSubmit = handleSubmit((data) => {
      console.log(data);
   });

   return (
      <form onSubmit={handleFormSubmit} className="space-y-4">
         <div>
            <input
               {...register("fullName", { required: "Please enter your name" })}
               type="text"
               placeholder="Full Name"
            />
            <p className="text-red-500 text-sm mt-1">
               {errors.fullName?.message}
            </p>
         </div>
         <div>
            <input
               {...register("email", { required: "Please enter your email" })}
               type="text"
               placeholder="Email"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
         </div>
         <div>
            <input
               {...register("phone", {
                  required: "Please enter your phone number",
               })}
               type="text"
               placeholder="Phone Number"
            />
            <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
         </div>
         {services.length > 0 && (
            <select>
               <option selected disabled>
                  Choose Service
               </option>
               {services.map((service) => (
                  <option key={service.data.title} value={service.data.title}>
                     {service.data.title}
                  </option>
               ))}
            </select>
         )}
         <input className="button" type="submit" placeholder="Send" />
      </form>
   );
};

export default ContactForm;
