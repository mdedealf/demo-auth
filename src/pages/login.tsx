import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../services/auth/auth";
import { toast } from "sonner";
import { useAuthStore } from "../store/auth-store";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { setTokens } = useAuthStore();

  const navigate = useNavigate();

  const { loginUser, isError, isPending, error } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await loginUser(values);
      const { accessToken, refreshToken } = response.data;
      const userRole = response.data.user.role;
      setTokens(accessToken, refreshToken, userRole);

      navigate("/");
      toast.success("Login to account success!");
    } catch (error) {
      toast.warning(`Login to account failed, ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-screen h-screen bg-black text-white">
      <Card className="min-w-[400px]">
        <CardHeader className="text-center">
          <CardTitle className="font-bold text-2xl">Login</CardTitle>
          <CardDescription>Login to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                {/* Email */}
                <FormField
                  disabled={isPending}
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="*********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <p>Loging in...</p> : <p>Login</p>}
                </Button>
                {isError && <p>{(error as Error).message}</p>}
              </div>
              <div className="mt-2 text-sm">
                <span>Do not have an account? </span>
                <Link to={"/register"} className="underline underline-offset-4">
                  Register
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
