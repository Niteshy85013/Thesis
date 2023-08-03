import React from "react";
import Header from "../Partials/Header";

function HomeUI() {
  return (
    <>
      <Header />
      {/* <!-- Section 2 --> */}
      <section class=" md:px-0" style={{ background: "#1B1A1D" }}>
        <div class="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mt-5 py-5">
                <h1 class=" flex text-white xl:inline">We Bring </h1>
                <h1 class="flex text-white  xl:inline">Grate </h1>
                <h1 class="flex  text-warning xl:inline">Talent </h1>
                <h1 class="flex text-white xl:inline">to Grate </h1>
                <h1 class="flex text-green-600 xl:inline">Startups</h1>
                <h5 className="text-white">
                  "Your Talent Your Time Create Your Freelancing Journey Today!"
                </h5>
              </div>

              <div className="">
                <a
                  href="/freelancers"
                  className="btn btn-warning fw-bold fs-4 flex"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./images/lan.png" alt="" className="img-fluid mb-5" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container shadow-lg mb-4 mt-2 rounded cont">
          <div class="row mt-3">
            <h1 class="text-center mb-5 mt-2 fw-bold  ">Hiring is Easy</h1>
            <div class="col-md-3 mt-2">
              <h2> Find Freelancers</h2>
              <p class="fst-italic">
                {" "}
                Browse a range of top talent freelancers of all skills and
                experiences levels.
              </p>
            </div>
            <div class="col-md-3 mt-2">
              <h2> Hire professionals</h2>
              <p class="fst-italic">
                {" "}
                Hire the outstanding professionals that best fit your project
                specifications.
              </p>
            </div>
            <div class="col-md-3 mt-2">
              <h2> Work Efficiently</h2>
              <p class="fst-italic">
                {" "}
                Collaborate easily through an online workspace that encourages
                productivity.
              </p>
            </div>
            <div class="col-md-3 mt-2">
              <h2> Pay easily for the job</h2>
              <p class="fst-italic">
                {" "}
                Payments are Simplified pay by hours or a fixed price for the
                whole project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <div className="container mb-2 mt-5 contradius border-dark">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://imgs.search.brave.com/wUChz8fMjuOjfHIc6USmsfi_fP1IiRVqNeRby6Vl39A/rs:fit:1200:938:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NTUtNTU1NzQx/Nl9zb2Z0d2FyZS1k/ZXZlbG9wbWVudC10/ZWFtLWRpZ2l0YWwt/bWFya2V0aW5nLWNs/aXBhcnQucG5n"
              className="img-fluid py-5"
              alt=""
            />
          </div>
          <div className="col-md-6 mt-5 ">
            <h1 className=" flex fw-bold py-3">
              Improve your work, it's free.
            </h1>
            {/* <h2 class="py-3">Meet clients you want to work with and advance your career or business.</h2> */}
            <span class="flex fs-3 fw-bold">
              <i
                class="bi bi-patch-check-fill"
                style={{ fontSize: "45px", color: "green" }}
              />{" "}
              Joining is free.
            </span>
            <br></br>
            <p class="flex ms-2 fs-5">
              Signup to browse professionals, research projects, and even
              schedule a consultation.
            </p>
            <span class=" flex fs-3 fw-bold">
              <i
                class="bi bi-patch-check-fill"
                style={{ fontSize: "35px", color: "green" }}
              ></i>
              Hire excellent freelancer by posting a job.
            </span>
            <br></br>
            <p class="ms-2 fs-5">
              Discovering freelancer does not have to be difficult. Submit a job
              or let us find one for you!
            </p>
            <span class=" flex fs-3 fw-bold">
              <i
                class="bi bi-patch-check-fill"
                style={{ fontSize: "35px", color: "green" }}
              />{" "}
              Work with the best.
            </span>{" "}
            <p class="flex ms-2 fs-5">
              Upwork makes it possible to improve your job while still
              benefiting from inexpensive transaction fees.
            </p>
          </div>
        </div>
      </div>
      {/* Banner Section Ends */}

      {/* Banner Section */}
      <div class="container backimg contradius mt-2">
        <div class="row">
          <div class="row ">
            <h1 className="flex fst-bold text-light mt-2">For Clients</h1>
            <h1 class="flex section-title fst-bold mb-3 py-3 text-warning">
              Discover talent on your own terms.
            </h1>
            <h2 class="flex fst-bold text-primary py-3">
              Collaborate with the greatest network of independent specialists
              to do tasks quickly and completely.
            </h2>
          </div>
          <div class="col mb-4 ">
            <div class="card  pt-5 bg-success">
              <div class="card-body">
                <h4 class=" mb-3 text-light">Post a job and hire a pro</h4>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card  pt-5 bg-success">
              <div class="card-body">
                <h4 class="  mb-3 text-light">Browse and buy project</h4>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card  pt-5 bg-success">
              <div class="card-body">
                <h5 class=" mb-3 text-light">
                  Let Us help you find a right Talents
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="container mb-2 mt-5 contradius border-dark">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src="https://imgs.search.brave.com/LGVvt1WYiSOuwGoIjBM_D76t6D-s6JWYhCfM8KbgTj4/rs:fit:804:615:1/g:ce/aHR0cHM6Ly93d3cu/amluZy5mbS9jbGlw/aW1nL2Z1bGwvMjU0/LTI1NDU1ODJfZW1w/bG95ZWUtY2xpcGFy/dC1jb21wdXRlci13/b3JrZXItbWFuLWlu/LW9mZmljZS1jbGlw/YXJ0LnBuZw"
              className="img-fluid py-5"
              alt="about"
            />
          </div>
          <div className="col-md-6 mt-5 ">
            <h2 className="flex text-warning fw-bold">For Talents</h2>
            <h1 className=" fw-bold py-3">Find Excellent Work </h1>
            <h2 class=" flex">
              Meet clients you want to work with and advance your career or
              business.
            </h2>
            <span class="fs-5 fw-bold flex">
              <i
                class="bi bi-patch-check-fill"
                style={{ fontSize: "30px", color: "green" }}
              />{" "}
              Discover opportunities at each stage of your freelance career.
            </span>
            <br></br>
            <br></br>
            <span class="fs-5 fw-bold flex">
              <i
                class="bi bi-patch-check-fill"
                style={{ fontSize: "30px", color: "green" }}
              />{" "}
              You have control over when, where, and how you work.
            </span>
            <br></br>
            <br></br>
            <span class="fs-5 fw-bold flex">
              <i
                class="bi bi-patch-check-fill"
                style={{ fontSize: "30px", color: "green" }}
              />{" "}
              Investigate various ways to make money.
            </span>
          </div>
        </div>
      </div>

      {/* Banner Section Ends */}

      {/* <!-- Section 4 --> */}
      <section class="py-20 bg-gray-50">
        <div class="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div class="flex flex-wrap items-center -mx-3">
            <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div class="w-full lg:max-w-md">
                <h2 class=" flex mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Jam-packed with all the way you need to succeed!
                </h2>
                <p class="flex mb-4 font-medium tracking-tight text-black xl:mb-6">
                  It's never been easier to build a business of your own. Our
                  tools will help you with the following:
                </p>
                <ul>
                  <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      class="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span class="font-medium text-gray-500">
                      Faster Processing and Delivery
                    </span>
                  </li>
                  <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      class="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span class="font-medium text-gray-500">
                      Out of the Box Tracking and Monitoring
                    </span>
                  </li>
                  <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      class="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span class="font-medium text-gray-500">
                      100% Protection and Security for Your Application
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                class="mx-auto sm:max-w-sm lg:max-w-full img-fluid"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 5 --> */}
      <section class="flex items-center justify-center py-20 bg-white min-w-screen">
        <div class="px-16 bg-white">
          <div class="container flex flex-col items-start mx-auto lg:items-center">
            <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>

            <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others are saying
            </h2>
            <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col items-start justify-center">
                    <h4 class="font-bold text-gray-800">John Doe</h4>
                    <p class="text-gray-600">CEO of Something</p>
                  </div>
                </div>
                <blockquote class="mt-8 text-lg text-gray-500">
                  "This is a no-brainer if you want to take your business to the
                  next level then this is it!"
                </blockquote>
              </div>
              <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col items-start justify-center">
                    <h4 class="font-bold text-gray-800">Jane Doe</h4>
                    <p class="text-gray-600">CTO of Business</p>
                  </div>
                </div>
                <blockquote class="mt-8 text-lg text-gray-500">
                  "Thanks for creating this service. My life is so much easier.
                  Thanks for making such a great product."
                </blockquote>
              </div>
              <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col items-start justify-center">
                    <h4 class="font-bold text-gray-800">John Smith</h4>
                    <p class="text-gray-600">Creator of Stuff</p>
                  </div>
                </div>
                <blockquote class="mt-8 text-lg text-gray-500">
                  "Packed with awesome content and exactly what I was looking
                  for. I would highly recommend this to anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeUI;
