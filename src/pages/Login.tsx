import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, ArrowLeft, RefreshCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState<"credentials" | "otp">("credentials");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const navigate = useNavigate();
    const { login, verifyOtp } = useAuth();
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    // Countdown timer for resend OTP
    useEffect(() => {
        if (countdown <= 0) return;
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [countdown]);

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            const result = await login(data.email, data.password);
            if (result.success) {
                setEmail(data.email);
                setStep("otp");
                setCountdown(60);
                toast({
                    title: "OTP Sent!",
                    description: "Check your email for the verification code.",
                });
            } else {
                toast({
                    title: "Login Failed",
                    description: result.message,
                    variant: "destructive",
                });
            }
        } catch {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = useCallback(async (otpValue: string) => {
        if (otpValue.length !== 6) return;
        setIsVerifying(true);
        try {
            const result = await verifyOtp(email, otpValue);
            if (result.success) {
                toast({
                    title: "Welcome back!",
                    description: "You have successfully logged in.",
                });
                navigate("/");
            } else {
                toast({
                    title: "Verification Failed",
                    description: result.message,
                    variant: "destructive",
                });
                setOtp("");
            }
        } catch {
            toast({
                title: "Error",
                description: "OTP verification failed. Please try again.",
                variant: "destructive",
            });
            setOtp("");
        } finally {
            setIsVerifying(false);
        }
    }, [email, verifyOtp, toast, navigate]);

    const handleResendOtp = async () => {
        setIsResending(true);
        try {
            const formValues = getValues();
            const result = await login(formValues.email, formValues.password);
            if (result.success) {
                setCountdown(60);
                setOtp("");
                toast({
                    title: "OTP Resent",
                    description: "A new verification code has been sent to your email.",
                });
            } else {
                toast({
                    title: "Error",
                    description: result.message,
                    variant: "destructive",
                });
            }
        } catch {
            toast({
                title: "Error",
                description: "Failed to resend OTP. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsResending(false);
        }
    };

    const handleOtpChange = (value: string) => {
        setOtp(value);
        if (value.length === 6) {
            handleVerifyOtp(value);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center py-12 md:py-24">
                <div className="w-full max-w-md mx-auto px-6">
                    <AnimatePresence mode="wait">
                        {step === "credentials" ? (
                            <motion.div
                                key="credentials"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="text-center mb-8">
                                    <h1 className="font-serif text-3xl md:text-4xl mb-2">
                                        Welcome Back
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Sign in to your GotLife account
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            {...register("email")}
                                            className="h-12"
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-destructive">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="••••••••"
                                                {...register("password")}
                                                className="h-12 pr-12"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-destructive">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="editorial"
                                        size="lg"
                                        className="w-full"
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? "Signing in..."
                                            : "Sign In"}
                                    </Button>
                                </form>

                                <div className="mt-8 text-center">
                                    <p className="text-sm text-muted-foreground">
                                        Don't have an account?{" "}
                                        <Link
                                            to="/register"
                                            className="text-foreground underline hover:no-underline"
                                        >
                                            Create one
                                        </Link>
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="otp"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-center"
                            >
                                {/* Back button */}
                                <button
                                    onClick={() => {
                                        setStep("credentials");
                                        setOtp("");
                                    }}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 mx-auto"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to login
                                </button>

                                {/* Email icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
                                        <Mail className="h-7 w-7 text-primary" />
                                    </div>
                                </div>

                                <h1 className="font-serif text-3xl md:text-4xl mb-2">
                                    Verify Your Identity
                                </h1>
                                <p className="text-sm text-muted-foreground mb-2">
                                    We've sent a 6-digit code to
                                </p>
                                <p className="text-sm font-medium mb-8">
                                    {email}
                                </p>

                                {/* OTP Input */}
                                <div className="flex justify-center mb-8">
                                    <InputOTP
                                        maxLength={6}
                                        value={otp}
                                        onChange={handleOtpChange}
                                        disabled={isVerifying}
                                    >
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} className="w-12 h-14 text-lg" />
                                            <InputOTPSlot index={1} className="w-12 h-14 text-lg" />
                                            <InputOTPSlot index={2} className="w-12 h-14 text-lg" />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3} className="w-12 h-14 text-lg" />
                                            <InputOTPSlot index={4} className="w-12 h-14 text-lg" />
                                            <InputOTPSlot index={5} className="w-12 h-14 text-lg" />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>

                                {isVerifying && (
                                    <p className="text-sm text-muted-foreground mb-4 animate-pulse">
                                        Verifying...
                                    </p>
                                )}

                                {/* Resend OTP */}
                                <div className="mt-6">
                                    {countdown > 0 ? (
                                        <p className="text-sm text-muted-foreground">
                                            Resend code in{" "}
                                            <span className="font-medium text-foreground">
                                                {countdown}s
                                            </span>
                                        </p>
                                    ) : (
                                        <button
                                            onClick={handleResendOtp}
                                            disabled={isResending}
                                            className="inline-flex items-center gap-2 text-sm text-foreground underline hover:no-underline disabled:opacity-50"
                                        >
                                            <RefreshCw
                                                className={`h-3.5 w-3.5 ${isResending
                                                        ? "animate-spin"
                                                        : ""
                                                    }`}
                                            />
                                            {isResending
                                                ? "Sending..."
                                                : "Resend Code"}
                                        </button>
                                    )}
                                </div>

                                <p className="text-xs text-muted-foreground mt-8">
                                    The code will expire in 10 minutes.
                                    <br />
                                    Check your spam folder if you don't see the
                                    email.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Login;
