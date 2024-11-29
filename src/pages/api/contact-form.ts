import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const email_address = data.email_address;
  const first_name = data.first_name;
  const phone_number = data.phone_number;

  console.log(email_address, first_name, phone_number);

  // Validate the data - you'll probably want to do more than this
  if (!email_address || !first_name || !phone_number) {
    return new Response(
      JSON.stringify({
        message: 'Missing required fields',
      }),
      { status: 400 }
    );
  }

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-Key': 'jabqip9riakaglwjgfldpohhug978oj07sjfjo146tzq211ihpc6pkhy5v8idnee',
    },
    body: JSON.stringify({
      locale: 'en',
      email: email_address,
      fields: [
        { slug: 'first_name', value: first_name },
        { slug: 'phone_number', value: phone_number },
      ],
    }),
  };
  const url = 'https://api.systeme.io/api/contacts';

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log('json.violations , ', json.violations);
    if (json.violations) {
      console.log('violations', json.violations);
      return new Response(
        JSON.stringify({
          message: json.violations.message,
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({
        message: 'Success',
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: 'Error',
      }),
      { status: 400 }
    );
  }
};
