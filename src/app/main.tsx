import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";

/**
 * Для проверяющих:
 * - Типизация не везде, но старался максимально
 * сделать все безопасно;
 * - Над самой архитектурой еще стоит поработать,
 * особенно над папкой utils;
 * из плюсов:
 * - lazy loading для карточек;
 * - и карточки на гридах, при растягивании экрана
 * как в фигме карты сдвигаются и заполняют ряд,
 * - статистика не ломается при поиске
 * - Был использован React Context
 * - debounce в поиске, и в обновлении страницы пользователей
 */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
