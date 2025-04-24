import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from "../components/ui/card";

import { ArrowRight, BrainCircuit, Briefcase, FileEdit, LineChart, ScrollText, User, UserPlus } from "lucide-react";
import { FaChalkboardTeacher, FaCommentDollar, FaRegCommentDots, FaRobot, FaRocket, FaUser, FaUserGraduate } from 'react-icons/fa';

export const features = [
    {
        icon: <User className="w-10 h-10 mb-4 text-primary" />,
        title: "Role-Based Access",
        description:
            "Separate dashboards and tools for students and mentors to maximize their experience.",
    },
    {
        icon: <FaRobot className="w-10 h-10 mb-4 text-primary" />,
        title: "AI Mentor Matching",
        description:
            " Smart matching using AI to connect students with the best mentor based on goals and interests."
    },
    {
        icon: <FaRegCommentDots className="w-10 h-10 mb-4 text-primary" />,
        title: "Post & Share",
        description:
            "Both students and mentors can post thoughts, share questions, or create discussions."
    },
    {
        icon: <FaRocket className="w-10 h-10 mb-4 text-primary" />,
        title: "Growth Tracker",
        description: "Set goals, monitor progress, and stay accountable with your personalized dashboard.",
    },
    {
        icon: <FaUserGraduate className="w-10 h-10 mb-4 text-primary" />,
        title: "Student Profiles",
        description: "Let mentors view your strengths, learning path, and areas you’re passionate about.",
    },
    {
        icon: <FaRocket className="w-10 h-10 mb-4 text-primary" />,
        title: "Growth Tracker",
        description: "Set goals, monitor progress, and stay accountable with your personalized dashboard.",
    },
    {
        icon: <FaRocket className="w-10 h-10 mb-4 text-primary" />,
        title: "Growth Tracker",
        description: "Set goals, monitor progress, and stay accountable with your personalized dashboard.",
    },
    {
        icon: <FaChalkboardTeacher className="w-10 h-10 mb-4 text-primary" />,
        title: "Mentor Portfolios",
        description: "Mentors can showcase their background, subjects, and mentoring style to attract the right mentees.",
    },
];


const howItWorks = [
    {
        title: "1. Sign Up",
        desc: "Choose your role and register securely.",
        icon: <UserPlus className="w-8 h-8 text-primary" />,
    },
    {
        title: "2. Build Profile",
        desc: "Add goals, interests, and skills.",
        icon: <FaUser className="w-8 h-8 text-primary" />,
    },
    {
        title: "3. Match & Connect",
        desc: "Our AI suggests top mentor/mentee matches.",
        icon: <FileEdit className="w-8 h-8 text-primary" />,
    },
    {
        title: "4. Engage & Grow",
        desc: "Collaborate through posts, calls, and shared resources.",
        icon: <FaCommentDollar className="w-8 h-8 text-primary" />,
    },
];


export const testimonial = [
    {
        quote:
            "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
        author: "Sarah Chen",
        image: "https://randomuser.me/api/portraits/women/75.jpg",
        role: "Software Engineer",
        company: "Tech Giant Co.",
    },
    {
        quote:
            "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
        author: "Michael Rodriguez",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        role: "Product Manager",
        company: "StartUp Inc.",
    },
    {
        quote:
            "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
        author: "Priya Patel",
        image: "https://randomuser.me/api/portraits/women/74.jpg",
        role: "Marketing Director",
        company: "Global Corp",
    },
];

const LandingPage = () => {

    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <section className="w-full pt-36 md:pt-48 pb-10 grid-background">
                <div className="space-y-6 text-center">
                    <div className="space-y-6 mx-auto">
                        <h1 className="text-5xl font-bold md:text-6xl  xl:text-8xl gradient-title animate-gradient">
                            Empower Your Professional Journey with {" "}
                            {/* <br /> */}
                            Mentors
                        </h1>
                        <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                            The AI-powered platform designed to bridge the gap between
                            aspiring students and experienced mentors. Learn, grow, and connect
                            — smarter and faster.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Link to={"/sign-in"}>
                            <Button size="lg" className="px-8">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="https://www.youtube.com/roadsidecoder">
                            <Button size="lg" variant="outline" className="px-8">
                                Watch Demo
                            </Button>
                        </Link>
                    </div>

                    <div className="hero-image-wrapper mt-5 md:mt-30">
                        <div ref={imageRef} className="hero-image">
                            <img
                                src="header.png"
                                width={1280}
                                height={720}
                                alt="Dashboard Preview"
                                className="rounded-lg shadow-2xl border mx-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section >


            {/* Features Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
                        Platform Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="border-2 hover:border-primary transition-colors duration-300"
                            >
                                <CardContent className="pt-6 text-center flex flex-col items-center">
                                    <div className="flex flex-col items-center justify-center">
                                        {feature.icon}
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


            {/* Stats Section */}
            <section className="w-full py-12 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h3 className="text-4xl font-bold">50+</h3>
                            <p className="text-muted-foreground">Mentors</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h3 className="text-4xl font-bold">1000+</h3>
                            <p className="text-muted-foreground">Students</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h3 className="text-4xl font-bold">95%</h3>
                            <p className="text-muted-foreground">Success Rate</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h3 className="text-4xl font-bold">24/7</h3>
                            <p className="text-muted-foreground">AI Support</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* How It Works Section */}
            <section className="w-full py-12 md:py-24 ">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-muted-foreground">
                            Four simple steps to accelerate your career growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {howItWorks.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-xl">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="w-full py-12 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonial.map((testimonial, index) => (
                            <Card key={index} className="bg-background">
                                <CardContent className="pt-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="relative h-12 w-12 flex-shrink-0">
                                                <img
                                                    width={40}
                                                    height={40}
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="rounded-full object-cover border-2 border-primary/20"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{testimonial.author}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-sm text-primary">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="text-muted-foreground italic relative">
                                                <span className="text-3xl text-primary absolute -top-4 -left-2">
                                                    &quot;
                                                </span>
                                                {testimonial.quote}
                                                <span className="text-3xl text-primary absolute -bottom-4">
                                                    &quot;
                                                </span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="w-full">
                <div className="mx-auto py-24 gradient rounded-lg">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                            Ready to Accelerate Your Career?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                            Join thousands of professionals who are advancing their careers
                            with AI-powered guidance.
                        </p>
                        <Link to="/sign-in" passHref>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="h-11 mt-5 animate-bounce bg-blue-700"
                    
                            >
                                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
