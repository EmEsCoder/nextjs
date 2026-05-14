"use server"

import { cookies } from 'next/headers';
import SetData from './SetData';

async function SendTokenToBackend() {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    return <div>توکن یافت نشد</div>;
  }

  const backendRes = await fetch('http://localhost:8000/api/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json', // درست شد: application/json
      'Content-Type': 'application/json',
    },
  });

  const data = await backendRes.json();

  return (
    <div>
      <SetData data={data} />
    </div>
  );
}

async function logout() {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    return { error: "توکن یافت نشد" }; // برگرداندن object به جای JSX
  }

  const res = await fetch('http://localhost:8000/api/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json', // درست شد
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    (await cookies()).delete('token');
    return { success: true }; // برگرداندن object
  } else {
    const data = await res.json(); // اینجا باید از res استفاده کنید
    return { error: data.message || "Error" };
  }
}

export { SendTokenToBackend, logout };