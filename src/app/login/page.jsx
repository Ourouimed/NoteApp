"use client";
import { LoginForm } from "@/components/login-form";

export default function LoginPage (){
    
    
    return (
        <div className="flex min-h-screen p-8 items-center justify-center">
            <div className="w-full max-w-md">
                <LoginForm/>
            </div>    
        </div>
    );
}