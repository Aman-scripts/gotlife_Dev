import { useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const VerifyOTP = () => {
    const [searchParams] = useSearchParams();
    const emailFromUrl = searchParams.get("email") || "";
    const [otp, setOtp] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);
    const navigate = useNavigate();
    const { verifyOtp } = useAuth();
    const { toast } = useToast();

    const handleVerify = useCallback(
        async (otpValue: string) => {
            if (otpValue.length !== 6 || !emailFromUrl) return;
            setIsVerifying(true);
            try {
                const result = await verifyOtp(emailFromUrl, otpValue);
                if (result.success) {
                    toast({
                        title: "Success",
                        description: "You have been successfully verified.",
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
                    description: "Verification failed. Please try again.",
                    variant: "destructive",
                });
                setOtp("");
            } finally {
                setIsVerifying(false);
            }
        },
        [emailFromUrl, verifyOtp, toast, navigate]
    );

    const handleOtpChange = (value: string) => {
        setOtp(value);
        if (value.length === 6) {
            handleVerify(value);
        }
    };

    if (!emailFromUrl) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center py-12 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center px-6"
                    >
                        <h1 className="font-serif text-3xl md:text-4xl mb-4">
                            Invalid Link
                        </h1>
                        <p className="text-sm text-muted-foreground mb-6">
                            This verification link appears to be invalid or expired.
                        </p>
                        <button
                            onClick={() => navigate("/login")}
                            className="text-sm underline hover:no-underline"
                        >
                            Go to Login
                        </button>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center py-12 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md mx-auto px-6 text-center"
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
                            <ShieldCheck className="h-7 w-7 text-primary" />
                        </div>
                    </div>

                    <h1 className="font-serif text-3xl md:text-4xl mb-2">
                        Email Verification
                    </h1>
                    <p className="text-sm text-muted-foreground mb-2">
                        Enter the 6-digit code sent to
                    </p>
                    <p className="text-sm font-medium mb-8 flex items-center justify-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        {emailFromUrl}
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
                        <p className="text-sm text-muted-foreground animate-pulse">
                            Verifying your identity...
                        </p>
                    )}

                    <p className="text-xs text-muted-foreground mt-8">
                        Didn't receive the code?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="underline hover:no-underline"
                        >
                            Try logging in again
                        </button>
                    </p>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default VerifyOTP;
