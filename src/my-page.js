// my-page.js
export function MyPage() {
  return (
    <div>
      <h1>子应用</h1>

      <micro-app name="eam" url="http://localhost:3001/" baseroute="/eam"></micro-app>
    </div>
  );
}
