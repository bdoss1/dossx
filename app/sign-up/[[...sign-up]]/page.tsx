import { SignUp } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up | DossX',
  description: 'Create your DossX account to get started with Voxia AI voice agent.',
}

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-backgroundBody dark:bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="text-3xl font-bold text-secondary dark:text-white">
            DossX
          </a>
          <p className="text-colorText dark:text-dark-100 mt-2">
            Create your account to get started
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-box rounded-2xl',
              headerTitle: 'text-secondary dark:text-white',
              headerSubtitle: 'text-colorText dark:text-dark-100',
              socialButtonsBlockButton: 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-200',
              formFieldLabel: 'text-secondary dark:text-white',
              formFieldInput: 'border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200',
              footerActionLink: 'text-primary hover:text-primary/80',
              formButtonPrimary: 'bg-primary hover:bg-primary/90 text-black',
            },
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/voxia/onboarding"
        />
      </div>
    </main>
  )
}
