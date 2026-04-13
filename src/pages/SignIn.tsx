import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – no backend wired
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            {isCreatingAccount ? "Create Account" : "Sign In"}
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            {isCreatingAccount
              ? "Join Dfine Jewelry for an exclusive shopping experience."
              : "Welcome back! Sign in to your account."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name fields for registration */}
            {isCreatingAccount && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-12 border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-12 border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 border border-border bg-background px-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Forgot password – login only */}
            {!isCreatingAccount && (
              <div className="text-right">
                <button type="button" className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-foreground text-background text-sm font-medium uppercase tracking-widest hover:bg-foreground/90 transition-colors"
            >
              {isCreatingAccount ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Toggle between sign in / create account */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isCreatingAccount ? "Already have an account?" : "Don't have an account?"}
              <button
                onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                className="ml-1 text-foreground font-medium underline underline-offset-4 hover:text-accent transition-colors"
              >
                {isCreatingAccount ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>

          {/* Return to store */}
          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 uppercase tracking-wider transition-colors"
            >
              ← Return to Store
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignIn;
