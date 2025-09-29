import Lottie from "lottie-react";
import ContactUs from "../assets/animations/Contact Us.json";
import Success from "../assets/animations/success.json";
import Footer from "./Footer";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();

  const [state, handleSubmit] = useForm("myzdearn");
  const card =
    "border border-[var(--border)] rounded-2xl  shadow-xl  hover:border-cyan-500 hover:-translate-y-2 transition duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.9)]";
  const SocialIcon =
    "flex justify-center items-center w-10 h-10 bg-white hover:bg-blue-600 border border-gray-300 hover:border-blue-600 text-blue-600 hover:text-white  rounded-full transition duration-300 hover:-translate-y-1";
  return (
    <section
      id="Contact"
      className="bg-[var(--bg-primary)] text-[var(--text-main-dark)]"
    >
      <div className="pt-24 space-y-12 overflow-hidden">
        <div
          data-aos="fade-up"
          className="relative mt-16 pb-12 max-w-full lg:px-8"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
              {t("contact.head.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle)]">
              {t("contact.head.description")}
            </p>
          </div>
        </div>

        <div className="relative z-0 flex flex-wrap text-[var(--text-title)] lg:flex-nowrap gap-12 flex-col md:flex-row justify-center px-[3%] md:px-[10%]">
          <div
            data-aos="fade-down"
            className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
          >
            <div
              className={`bg-[var(--bg-card-dark)] p-10 px-6 sm:px-10 ${card}`}
            >
              <h3 className="text-xl font-bold mb-6">
                {" "}
                {t("contact.info.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">
                      {" "}
                      {t("contact.info.location.label")}
                    </h4>
                    <p>{t("contact.info.location.value")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center  bg-blue-100">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">
                      {" "}
                      {t("contact.info.email.label")}
                    </h4>
                    <a
                      href="mailto:tahashahin75@gmail.com"
                      className="text-blue-500 hover:underline sm:text-base"
                    >
                      {t("contact.info.email.value")}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center  bg-blue-100">
                    <i className="fas fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">
                      {" "}
                      {t("contact.info.phone.label")}
                    </h4>
                    <p> {t("contact.info.phone.value")}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">{t("contact.info.follow")}</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/taha-fawzi-662602129?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNapQ5QI%2BQRePhqqGkgNcxg%3D%3D"
                    className={SocialIcon}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DgdChcfgs/"
                    className={SocialIcon}
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://wa.me/201033961208"
                    className={SocialIcon}
                    target="_blank"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/eng.taha_fawzy?utm_source=qr&igsh=MmZubHFqYWlsaG14"
                    className={SocialIcon}
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="w-full lg:w-[50%]">
            <div
              className={`bg-[var(--bg-card-dark)] space-y-5  p-10 px-6 sm:px-10 ${card} `}
            >
              <div className="space-y-3">
                <h2 className="font-bold text-2xl">
                  {" "}
                  {t("contact.form.title")}
                </h2>
                {state.succeeded && (
                  <div className="flex items-center gap-1">
                    <Lottie
                      className="w-10"
                      loop={false}
                      animationData={Success}
                    />
                    <p className="text-lg">{t("contact.form.succesMessage")}</p>{" "}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-700 text-[--text-title] focus:outline-none focus:ring-2 focus:ring-cyan-600 "
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-700 text-[--text-title] focus:outline-none focus:ring-2 focus:ring-cyan-600 "
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg  border border-zinc-700 text-[--text-title] focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-[rgb(39,96,143)] flex justify-center items-center gap-2 text-white hover:bg-[rgb(32,80,119)] cursor-pointer hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(34,211,238,0.9)] transition duration-300 rounded-lg py-3 w-full"
                  >
                    <i className="fas fa-paper-plane"></i>
                    {state.submitting
                      ? t("contact.form.btn.pending")
                      : t("contact.form.btn.send")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
export default Contact;
