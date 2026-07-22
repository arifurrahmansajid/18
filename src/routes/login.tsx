import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowLeft, Mail, Lock, User as UserIcon } from 'lucide-react';
import logoImg from "@/assets/323refef@2xq.png";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute('/login')({
  component: LoginRoute,
});

function LoginRoute() {
  const [isLogin, setIsLogin] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-foreground">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> {t.login_back_home}
      </Link>

      {/* Language switcher on login page */}
      <div className="absolute top-8 right-8">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <img src={logoImg} alt="ReMech Logo" className="h-20 w-auto object-contain mb-4" />
          <h1 className="text-3xl font-display font-bold tracking-wide">
            {isLogin ? t.login_welcome_back : t.login_create_account}
          </h1>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            {isLogin 
              ? t.login_subtitle_signin
              : t.login_subtitle_register}
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-semibold">{t.login_full_name}</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder={t.login_placeholder_name}
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-sm font-semibold">{t.login_email}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="email" 
                className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder={t.login_placeholder_email}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold">{t.login_password}</label>
              {isLogin && (
                <a href="#" className="text-xs font-semibold text-primary hover:underline">{t.login_forgot_password}</a>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="password" 
                className="w-full bg-background border border-border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder={t.login_placeholder_password}
              />
            </div>
          </div>

          <button className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity mt-6">
            {isLogin ? t.login_sign_in : t.login_register}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          {isLogin ? t.login_no_account : t.login_have_account}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-bold hover:underline ml-1"
          >
            {isLogin ? t.login_register_now : t.login_sign_in_link}
          </button>
        </div>
      </div>
    </div>
  );
}

