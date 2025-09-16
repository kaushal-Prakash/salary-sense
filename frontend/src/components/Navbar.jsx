'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Menu, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

// Navigation menu trigger style (since it might not be available)
const navigationMenuTriggerStyle = () => 
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 h-10 py-2 px-4 group w-max";

export default function Navbar() {
  return (
    <motion.nav 
      className="w-full bg-background border-b fixed top-0 z-50 bg-opacity-60 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SalarySense</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#features" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#how-it-works" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                      How It Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#about" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild>
              <Link href="/predict" className="flex items-center space-x-2">
                <span>Predict Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-8 mt-10">
                  <SheetClose asChild>
                    <Link 
                      href="#features" 
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      Features
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link 
                      href="#how-it-works" 
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      How It Works
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link 
                      href="#about" 
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      About
                    </Link>
                  </SheetClose>
                  <Button asChild className="w-full">
                    <SheetClose asChild>
                      <Link href="/predict" className="flex items-center justify-center space-x-2">
                        <span>Predict Now</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </SheetClose>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}