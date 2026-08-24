import emailjs from "@emailjs/browser";
import {
  BadgePercent,
  Check,
  ChevronDown,
  Gift,
  HandCoins,
  Handshake,
  Network,
} from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { toast } from "sonner";

/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

const EMAILJS_SERVICE_ID = "service_1p7ynrp";
const EMAILJS_TEMPLATE_ID = "template_6nuspwi";
const EMAILJS_PUBLIC_KEY = "d0BucBhFNX26TUOgd";

/* =========================================================
   TYPES
========================================================= */

interface UserFormData {
  name: string;
  email: string;
}

interface UserFormErrors {
  name?: string;
  email?: string;
}

interface FriendFormData {
  email: string;
  phone: string;
}

interface FriendFormErrors {
  email?: string;
  phone?: string;
}

type ReferralStep = 1 | 2 | 3;

/* =========================================================
   COMPONENT
========================================================= */

const ReferAndEarn = () => {
  const [step, setStep] = useState<ReferralStep>(1);

  const [sendingInvite, setSendingInvite] =
    useState(false);

  /* =======================================================
     REFERRER DETAILS
  ======================================================= */

  const [formData, setFormData] =
    useState<UserFormData>({
      name: "",
      email: "",
    });

  const [errors, setErrors] =
    useState<UserFormErrors>({});

  /* =======================================================
     FRIEND DETAILS
  ======================================================= */

  const [friendData, setFriendData] =
    useState<FriendFormData>({
      email: "",
      phone: "",
    });

  const [friendErrors, setFriendErrors] =
    useState<FriendFormErrors>({});

  /* =======================================================
     REFERRER FORM CHANGE
  ======================================================= */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  /* =======================================================
     START REFERRING
  ======================================================= */

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const newErrors: UserFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Enter your email address";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email,
      )
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  };

  /* =======================================================
     FRIEND FORM CHANGE
  ======================================================= */

  const handleFriendChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      /*
       * Allow only numbers and maximum 10 digits
       */
      const numericValue = value.replace(/\D/g, "");

      setFriendData((prev) => ({
        ...prev,
        phone: numericValue.slice(0, 10),
      }));

      setFriendErrors((prev) => ({
        ...prev,
        phone: undefined,
      }));

      return;
    }

    setFriendData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFriendErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  /* =======================================================
     SEND INVITE + EMAILJS
  ======================================================= */

  const handleSendInvite = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const newErrors: FriendFormErrors = {};

    /* Friend Email */
    if (!friendData.email.trim()) {
      newErrors.email =
        "Enter your friend's email address";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        friendData.email,
      )
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    /* Friend Phone - Mandatory */
    if (!friendData.phone.trim()) {
      newErrors.phone =
        "Enter your friend's phone number";
    } else if (
      !/^[6-9]\d{9}$/.test(friendData.phone)
    ) {
      newErrors.phone =
        "Enter a valid 10-digit phone number";
    }

    setFriendErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSendingInvite(true);

    try {
      /*
       * Payload includes existing counselling-template fields
       * plus referral-specific fields.
       */
      const payload = {
        /* Existing EmailJS template variables */
        full_name: formData.name,
        email: formData.email,
        phone: `+91 ${friendData.phone}`,
        friend_email: friendData.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      toast.success(
        "Referral invite sent successfully.",
      );

      /*
       * Open success card in the same place
       */
      setStep(3);
    } catch (error) {
      console.error(
        "EmailJS referral error:",
        error,
      );

      toast.error(
        "Unable to send the referral invite. Please try again.",
      );
    } finally {
      setSendingInvite(false);
    }
  };

  /* =======================================================
     REFER ANOTHER FRIEND
  ======================================================= */

  const handleReferAgain = () => {
    /*
     * Keep original referrer name/email.
     * Clear only friend's details.
     */

    setFriendData({
      email: "",
      phone: "",
    });

    setFriendErrors({});

    setStep(2);
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <main className="bg-background">
      {/* =====================================================
          SECTION 1 - REFER & EARN
      ====================================================== */}

      <section className="relative overflow-hidden bg-[oklch(0.97_0.02_240)]">
        {/* Background Decoration */}
        <img
          src="https://www.simplilearn.com/ice9/assets/banner-right-circle.svgz"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden w-[560px] lg:block"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="flex flex-col">
            <h1 className="max-w-xl text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.5rem]">
              Refer your friends to PHINCO ELITE Programs
            </h1>

            {/* Benefit 1 */}

            <div className="mt-8 flex max-w-xl items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-white shadow-sm">
                <Gift className="h-6 w-6" />
              </div>

              <p className="pt-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
                You&apos;ll get up to ₹10000 Amazon gift
                voucher for every friend who enrolls.
              </p>
            </div>

            {/* Benefit 2 */}

            <div className="mt-6 flex max-w-xl items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-white shadow-sm">
                <BadgePercent className="h-6 w-6" />
              </div>

              <p className="pt-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Your friends get up to 20% discount on their
                first course.
              </p>
            </div>

            {/* Person Image */}

            <div className="mt-10 flex justify-center lg:mt-auto lg:justify-start lg:pt-10">
              <img
                src="https://www.simplilearn.com/ice9/assets/footer_Refer.png"
                alt="Refer your friends"
                loading="lazy"
                className="h-auto w-full max-w-[430px] object-contain"
              />
            </div>
          </div>

          {/* =================================================
              RIGHT CARD
          ================================================== */}

          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              {/* =================================================
                  STEP 1 - YOUR DETAILS
              ================================================== */}

              {step === 1 && (
                <div className="w-full rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
                  <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
                    Share your details
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8"
                  >
                    {/* Name */}

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Enter Your Name{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={`h-14 w-full rounded-lg border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                        }`}
                      />

                      <div className="min-h-[24px]">
                        {errors.name && (
                          <p className="mt-1 text-right text-sm text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}

                    <div className="mt-3">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Enter Your Email{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className={`h-14 w-full rounded-lg border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                        }`}
                      />

                      <div className="min-h-[24px]">
                        {errors.email && (
                          <p className="mt-1 text-right text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Start Referring */}

                    <div className="mt-5 flex justify-center">
                      <button
                        type="submit"
                        className="h-12 w-full rounded-lg bg-brand px-6 text-base font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.99] sm:max-w-sm"
                      >
                        Start Referring
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* =================================================
                  STEP 2 - FRIEND DETAILS
              ================================================== */}

              {step === 2 && (
                <div className="w-full rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8 md:p-10">
                  <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
                    Refer friends and empower them
                  </h2>

                  <form
                    onSubmit={handleSendInvite}
                    className="mt-8"
                  >
                    {/* Friend Email */}

                    <div>
                      <label
                        htmlFor="friendEmail"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Your Friend&apos;s Email{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        id="friendEmail"
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        value={friendData.email}
                        onChange={handleFriendChange}
                        placeholder="Friend’s Email"
                        className={`h-14 w-full rounded-lg border bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground ${
                          friendErrors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                        }`}
                      />

                      <div className="min-h-[24px]">
                        {friendErrors.email && (
                          <p className="mt-1 text-right text-sm text-red-500">
                            {friendErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Friend Phone */}

                    <div className="mt-3">
                      <label
                        htmlFor="friendPhone"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        Your Friend&apos;s Phone Number{" "}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>

                      <div
                        className={`flex h-14 w-full items-center rounded-lg border bg-background transition ${
                          friendErrors.phone
                            ? "border-red-500 focus-within:ring-2 focus-within:ring-red-500/20"
                            : "border-border focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20"
                        }`}
                      >
                        {/* Country */}

                        <button
                          type="button"
                          className="flex h-full shrink-0 cursor-default items-center gap-2 border-r border-border px-4 text-sm font-medium text-foreground"
                        >
                          IN
                          <ChevronDown className="h-4 w-4" />
                        </button>

                        {/* Country Code */}

                        <span className="shrink-0 pl-4 text-base font-medium text-foreground">
                          +91 -
                        </span>

                        {/* Phone Input */}

                        <input
                          id="friendPhone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          required
                          maxLength={10}
                          value={friendData.phone}
                          onChange={handleFriendChange}
                          placeholder="Phone Number"
                          className="h-full min-w-0 flex-1 bg-transparent px-3 text-base text-foreground outline-none placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="min-h-[24px]">
                        {friendErrors.phone && (
                          <p className="mt-1 text-right text-sm text-red-500">
                            {friendErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Send Invite */}

                    <div className="mt-6 flex justify-center">
                      <button
                        type="submit"
                        disabled={sendingInvite}
                        className="h-12 w-full rounded-lg bg-brand px-6 text-base font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:max-w-sm"
                      >
                        {sendingInvite
                          ? "Sending..."
                          : "Send Invite"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* =================================================
                  STEP 3 - SUCCESS
              ================================================== */}

              {step === 3 && (
                <div className="relative min-h-[510px] w-full overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
                  {/* Celebration / Confetti */}

                  <img
                    src="https://www.simplilearn.com/ice9/assets/web_confetti.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full object-cover"
                  />

                  <div className="relative z-10 flex min-h-[510px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
                    {/* Success icon */}

                    <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-[#68b691] text-white">
                      <Check
                        className="h-11 w-11"
                        strokeWidth={3}
                      />
                    </div>

                    <h2 className="mt-10 text-2xl font-extrabold text-[#339a77] sm:text-3xl">
                      Share more and earn more
                    </h2>

                    <p className="mt-7 max-w-md text-base leading-relaxed text-foreground sm:text-lg">
                      You will receive your voucher of ₹10000
                      as soon as your friend enrolls.
                    </p>

                    <p className="mt-5 max-w-md text-base leading-relaxed text-foreground sm:text-lg">
                      Keep sharing to earn more rewards and
                      accelerate impact, together.
                    </p>

                    <button
                      type="button"
                      onClick={handleReferAgain}
                      className="mt-10 h-12 w-full rounded-lg bg-brand px-6 text-base font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.99] sm:max-w-sm"
                    >
                      Refer and Earn More
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 - HOW REFERRAL WORKS
      ====================================================== */}

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
            3 Steps For Positive Career Outcomes
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
            {/* Step 1 */}

            <article className="relative flex min-h-[320px] flex-col items-center rounded-xl border border-amber-200/60 bg-amber-50/50 px-6 pb-8 pt-16 text-center">
              <div className="absolute -top-8 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full bg-foreground text-2xl font-bold text-background">
                1
              </div>

              <div className="mb-6 grid h-20 w-20 place-items-center text-amber-400">
                <Network
                  className="h-16 w-16"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Share Link
              </h3>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share a referral link with your friends
                using an email or phone number.
              </p>
            </article>

            {/* Step 2 */}

            <article className="relative flex min-h-[320px] flex-col items-center rounded-xl border border-amber-200/60 bg-amber-50/50 px-6 pb-8 pt-16 text-center">
              <div className="absolute -top-8 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full bg-foreground text-2xl font-bold text-background">
                2
              </div>

              <div className="mb-6 grid h-20 w-20 place-items-center text-amber-400">
                <Handshake
                  className="h-16 w-16"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Friend Enrolls
              </h3>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                When your friend enrolls, they get up to
                20% off on programs.
              </p>
            </article>

            {/* Step 3 */}

            <article className="relative flex min-h-[320px] flex-col items-center rounded-xl border border-amber-200/60 bg-amber-50/50 px-6 pb-8 pt-16 text-center">
              <div className="absolute -top-8 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full bg-foreground text-2xl font-bold text-background">
                3
              </div>

              <div className="mb-6 grid h-20 w-20 place-items-center text-amber-400">
                <HandCoins
                  className="h-16 w-16"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Get Rewarded
              </h3>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                Receive Amazon vouchers worth up to ₹10000
                when your friend enrolls.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReferAndEarn;