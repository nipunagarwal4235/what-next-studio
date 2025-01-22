export default function MadeByMeFooter() {
  return (
    <div className="w-full border-t py-1 text-center text-sm text-muted-foreground">
      <p className="flex items-center justify-center gap-1">
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://nipunagarwal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-muted-foreground hover:underline"
        >
          Nipun Agarwal
        </a>
      </p>
    </div>
  );
}
