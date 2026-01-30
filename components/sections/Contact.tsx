import { ContactCard } from "../ContactCard";

const Contact = () => {
  return (
    <div className="w-full items-center justify-center" id="contact">
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 w-full">
        <div className="col-span-1">
          <h2 className="font-urban text-4xl font-bold">Contact</h2>
          <p className="text-muted-foreground">
            This is a little blurb about getting in touch.
          </p>
        </div>
        <div className="grid md:grid-cols-2 flex-1 grow col-span-2  gap-2 sm:gap-6">
          <div className="flex-col flex gap-4">
            <ContactCard
              label="Email"
              value="nickhemingway@outlook.com"
              href="mailto:nickhemingway@outlook.com"
            />
            <ContactCard
              label="Phone"
              value="(250) 808-3954"
              href="tel:+12508083954"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
