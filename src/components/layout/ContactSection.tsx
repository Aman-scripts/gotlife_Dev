import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
}

export const ContactSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        mode: "onChange",
    });

    const onSubmit = (data: ContactFormData) => {
        toast.success("Message sent successfully! Our specialists will contact you soon.");
        reset();
    };

    return (
        <section className="py-16 md:py-20 bg-zinc-900 text-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto text-center"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3 block">
                        Get in Touch
                    </span>

                    <h2 className="font-serif text-2xl md:text-3xl mb-3">
                        Need Help Finding Your Scent?
                    </h2>

                    <p className="text-sm text-zinc-400 mb-8">
                        Our fragrance specialists are here to help you discover your perfect signature scent.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* First Name */}
                            <div className="text-left">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    {...register("firstName", {
                                        required: "First name is required",
                                    })}
                                    className={`w-full px-4 py-3 bg-white border text-zinc-900 text-sm transition-colors ${errors.firstName
                                        ? "border-red-500"
                                        : "border-zinc-300 focus:border-zinc-900"
                                        }`}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div className="text-left">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastName", {
                                        required: "Last name is required",
                                    })}
                                    className={`w-full px-4 py-3 bg-white border text-zinc-900 text-sm transition-colors ${errors.lastName
                                        ? "border-red-500"
                                        : "border-zinc-300 focus:border-zinc-900"
                                        }`}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="text-left">
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                className={`w-full px-4 py-3 bg-white border text-zinc-900 text-sm transition-colors ${errors.email
                                    ? "border-red-500"
                                    : "border-zinc-300 focus:border-zinc-900"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-10 py-3.5 bg-white text-zinc-900 text-sm uppercase tracking-[0.15em] font-medium hover:bg-zinc-200 transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
