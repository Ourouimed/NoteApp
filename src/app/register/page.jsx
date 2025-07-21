
import { RegisterForm } from "@/components/register-form";

export default function RegisterPage (){
    return (
        <div className="flex min-h-screen p-8 items-center justify-center">
            <div className="w-full max-w-md">
                <RegisterForm/>
            </div>    
        </div>
    );
}