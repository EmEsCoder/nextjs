import { cookies } from 'next/headers';
import SetData from './SetData';

export default async function SendTokenToBackend() {
  // 1. دریافت توکن از کوکی (همان کار قبلی)
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    return <div>توکن یافت نشد</div>;
  }

  // 2. ارسال توکن به سرور خودتان (مثلاً برای اعتبارسنجی یا دریافت دیتا)
  const backendRes = await fetch('http://localhost:8000/api/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    // اگر نیاز به ارسال کوکی به بکند دارید (اختیاری)
    // credentials: 'include',
  });

  const data = await backendRes.json();


  return (
    <div>
            <SetData data={data} />
    </div>
  );
}