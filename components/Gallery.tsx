import Link from "next/link";

export default function Gallery() {
  return (
    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 list-none p-0 m-0">
      <li>
        <Link href="/img/galeria_01.jpg">
          <img
            src="/img/galeria_01.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_02.jpg">
          <img
            src="/img/galeria_02.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_03.jpg">
          <img
            src="/img/galeria_03.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_04.jpg">
          <img
            src="/img/galeria_04.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_05.jpg">
          <img
            src="/img/galeria_05.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_06.jpg">
          <img
            src="/img/galeria_06.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_07.jpg">
          <img
            src="/img/galeria_07.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_08.jpg">
          <img
            src="/img/galeria_08.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>

      <li>
        <Link href="/img/galeria_09.jpg">
          <img
            src="/img/galeria_09.jpg"
            alt="imagen galeria"
            className="h-[40rem] w-[40rem] object-cover"
          />
        </Link>
      </li>
    </ul>
  );
}
