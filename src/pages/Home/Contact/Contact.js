import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        'service_h3mf1um', //'YOUR_SERVICE_ID',
        'template_nme8c7n', //'YOUR_TEMPLATE_ID',
        form.current, //data,
        'CX9sx6H64TnqcK7PG' // 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Your message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Unfortunately! your message failed to send!!');
        }
      );
    reset();
  };

  return (
    <div className="container mx-auto px-6 my-16">
      <ToastContainer />
      <h1
        className="text-2xl capitalize font-bold"
        style={{ fontFamily: 'Headland One' }}
      >
        <span className="text-primary">Get in</span> <span>touch</span>
        <div className="bg-gradient-to-r from-primary to-secondary h-1 w-40"></div>
      </h1>
      <div className="flex flex-col items-center justify-center md:justify-around lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="py-6 text-xl text-justify">
            If you have any suggestions, projects, or even want to say “hello”,
            please fill out the form below and I will reply you shortly. I've
            also placed all my social account links, LinkedIn, and GitHub links,
            feel free to connect with me.
          </p>
          <div className="my-6">
            {' '}
            <a
              href="https://www.facebook.com/azizul.azizulhoquejiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                <FaFacebookF className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/muhammadazizuljiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white">
                <FaInstagram className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://twitter.com/muhammadjiku364"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                <FaTwitter className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-azizul-hoque-jiku-775057211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                <FaLinkedinIn className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://github.com/muhammad-jiku"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-white hover:text-black">
                <FaGithub className="text-lg md:text-2xl" />
              </button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-sm lg:w-1/2 shadow-2xl">
          <div className="my-4">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control flex flex-col md:flex-row mb-4">
                <div className="mr-2">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="p-2 bg-transparent border-b-2 border-primary w-full mb-4 focus:outline-0"
                    {...register('user_name', {
                      required: {
                        value: true,
                        message: 'Please insert your name',
                      },
                    })}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors?.user_name?.type === 'required' && (
                      <span>{errors?.user_name?.message}</span>
                    )}
                  </p>
                </div>
                <div className="mr-2">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="p-2 bg-transparent border-b-2 border-primary w-full mb-4 focus:outline-0"
                    {...register('user_email', {
                      required: {
                        value: true,
                        message: 'Please insert your email',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Invalid Email',
                      },
                    })}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors?.user_email?.type === 'required' && (
                      <span>{errors?.user_email?.message}</span>
                    )}
                    {errors?.user_email?.type === 'pattern' && (
                      <span>{errors?.user_email?.message}</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="form-control mb-4">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  className="p-2 bg-transparent border-b-2 border-primary focus:outline-0"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Please write your message',
                    },
                  })}
                ></textarea>
                <p className="text-red-500 font-semibold">
                  {errors?.message?.type === 'required' && (
                    <span>{errors?.message?.message}</span>
                  )}
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary text-white uppercase"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
