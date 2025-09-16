'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  BarChart3,
  Target,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">      
      {/* Hero Section */}
      <section className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6"
          >
            <div className="p-2 bg-primary rounded-full">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Turn Your <span className="text-primary">Education</span>, 
            <span className="text-primary"> Experience</span>, and 
            <span className="text-primary"> Skills</span> Into Salary Insights
          </h1>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg py-6 px-8">
              <Link href="/predict" className="flex items-center space-x-2">
                <span>Predict Your Salary</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
              <Link href="#how-it-works">
                How It Works
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Powerful Features</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make informed career decisions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full dark:bg-blue-900/20">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle>AI-Powered Predictions</CardTitle>
                  <CardDescription>
                    Advanced machine learning algorithms analyze thousands of data points
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full dark:bg-green-900/20">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <CardTitle>Personalized Insights</CardTitle>
                  <CardDescription>
                    Get tailored recommendations based on your specific profile
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-full dark:bg-purple-900/20">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle>Data Privacy</CardTitle>
                  <CardDescription>
                    Your information is secure and never shared with third parties
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your salary prediction in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Your Details</h3>
              <p className="text-muted-foreground">
                Provide information about your education, experience, skills, and location
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our algorithms process your data against thousands of salary points
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Prediction</h3>
              <p className="text-muted-foreground">
                Receive a detailed salary range and career insights
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Earning Potential?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who have used SalarySense to make informed career decisions
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
              <Link href="/predict" className="flex items-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}