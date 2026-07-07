/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Calendar, Clock, CheckCircle2, User, HelpCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  // Translations
  const localizedContent = {
    pt: {
      subtitle: 'Entre em contato ou agende um bate-papo diretamente no meu calendário',
      title: 'Fale Comigo',
      formTitle: 'Envie uma mensagem',
      nameLabel: 'Nome completo',
      emailLabel: 'E-mail',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      sendButton: 'Enviar Mensagem',
      sending: 'Enviando...',
      successMsg: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      scheduleTitle: 'Agendar Reunião',
      scheduleSubtitle: 'Selecione um dia e horário disponível abaixo:',
      selectTime: 'Escolha o Horário:',
      confirmBtn: 'Confirmar Agendamento',
      slotsTitle: 'Horários disponíveis para',
      modalTitle: 'Confirmar Reunião',
      modalConfirmBtn: 'Confirmar Reunião',
      modalSuccess: 'Reunião agendada com sucesso! Um convite foi enviado para seu e-mail.',
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      reasonLabel: 'Motivo da Reunião',
      reasons: ['Oportunidade de Trabalho', 'Oportunidade de Estágio', 'Projeto Freelance', 'Colaboração', 'Convite para Evento', 'Conversa Geral', 'Outro'],
    },
    en: {
      subtitle: 'Get in touch or schedule a casual meeting directly in my calendar',
      title: 'Contact Me',
      formTitle: 'Send a Message',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMsg: 'Message sent successfully! I will get back to you shortly.',
      scheduleTitle: 'Schedule a Meeting',
      scheduleSubtitle: 'Select a suitable day and time slot below:',
      selectTime: 'Select Time:',
      confirmBtn: 'Confirm Booking',
      slotsTitle: 'Available slots for',
      modalTitle: 'Confirm Meeting Details',
      modalConfirmBtn: 'Book Meeting',
      modalSuccess: 'Meeting scheduled successfully! An invitation has been sent to your email.',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      reasonLabel: 'Reason for Meeting',
      reasons: ['Job Opportunity', 'Internship Opportunity', 'Freelance Project', 'Collaboration', 'Event Invitation', 'General Conversation', 'Other'],
    },
    es: {
      subtitle: 'Ponte en contacto o programa una reunión directamente en mi calendario',
      title: 'Contacto',
      formTitle: 'Enviar Mensaje',
      nameLabel: 'Nombre completo',
      emailLabel: 'Correo electrónico',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      sendButton: 'Enviar Mensaje',
      sending: 'Enviando...',
      successMsg: '¡Mensaje enviado con éxito! Me pondré en contacto contigo muy pronto.',
      scheduleTitle: 'Programar Reunión',
      scheduleSubtitle: 'Selecciona un día y horario disponible:',
      selectTime: 'Seleccionar Horario:',
      confirmBtn: 'Confirmar Cita',
      slotsTitle: 'Horarios disponibles para',
      modalTitle: 'Confirmar Reunión',
      modalConfirmBtn: 'Reservar Reunión',
      modalSuccess: '¡Reunión programada con éxito! Se ha enviado una invitación a tu correo.',
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      reasonLabel: 'Motivo de la Reunión',
      reasons: ['Oportunidad de Empleo', 'Oportunidad de Prácticas', 'Proyecto Freelance', 'Colaboración', 'Invitación a Evento', 'Conversación General', 'Otro'],
    },
    ru: {
      subtitle: 'Свяжитесь со мной или запланируйте встречу прямо в календаре',
      title: 'Контакты',
      formTitle: 'Отправить сообщение',
      nameLabel: 'Полное имя',
      emailLabel: 'Электронная почта',
      subjectLabel: 'Тема',
      messageLabel: 'Сообщение',
      sendButton: 'Отправить сообщение',
      sending: 'Отправка...',
      successMsg: 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.',
      scheduleTitle: 'Запланировать встречу',
      scheduleSubtitle: 'Выберите подходящий день и доступное время:',
      selectTime: 'Выберите время:',
      confirmBtn: 'Подтвердить встречу',
      slotsTitle: 'Доступные слоты на',
      modalTitle: 'Подтверждение встречи',
      modalConfirmBtn: 'Забронировать',
      modalSuccess: 'Встреча успешно запланирована! Приглашение отправлено на вашу электронную почту.',
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      reasonLabel: 'Причина встречи',
      reasons: ['Предложение работы', 'Стажировка', 'Фриланс проект', 'Сотрудничество', 'Приглашение на событие', 'Просто пообщаться', 'Другое'],
    }
  };

  const text = localizedContent[language] || localizedContent['en'];

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Calendar / Scheduling State
  const now = new Date();
  const [calendarYear, setCalendarYear] = useState(now.getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(now.getDate());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [meetName, setMeetName] = useState('');
  const [meetEmail, setMeetEmail] = useState('');
  const [meetReason, setMeetReason] = useState('');
  const [meetCustomReason, setMeetCustomReason] = useState('');
  const [isMeetBooked, setIsMeetBooked] = useState(false);

  // Lock scrolling when booking modal is open
  React.useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBookingModalOpen]);

  // Generate Calendar values
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();

  // Time Slots
  const timeSlots = ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      // Reset form fields
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 1500);
  };

  const handleBookMeet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetName || !meetEmail || !meetReason || !selectedDay || !selectedTimeSlot) return;
    if (meetReason === text.reasons[6] && !meetCustomReason) return;

    setIsMeetBooked(true);
    setTimeout(() => {
      setIsBookingModalOpen(false);
      setIsMeetBooked(false);
      alert(text.modalSuccess);
      setSelectedTimeSlot(null);
      setMeetName('');
      setMeetEmail('');
      setMeetReason('');
      setMeetCustomReason('');
    }, 1500);
  };

  const nextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else {
      setCalendarMonth((m) => m + 1);
    }
    setSelectedDay(null);
    setSelectedTimeSlot(null);
  };

  const prevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else {
      setCalendarMonth((m) => m - 1);
    }
    setSelectedDay(null);
    setSelectedTimeSlot(null);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-1 mb-3 ${
              theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
            }`}
          >
            {text.title}
          </motion.h2>
          <div className={`w-24 h-1 mx-auto mt-4 mb-6 rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF]'
              : 'bg-gradient-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]'
          }`} />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className={`text-xs sm:text-sm max-w-xl mx-auto ${
              theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'
            }`}
          >
            {text.subtitle}
          </motion.p>
        </div>

        {/* Two-Column Form and Scheduling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border ${
              theme === 'light'
                ? 'bg-[#FDFBF7]/80 border-[#F872EE]/30 shadow-md'
                : 'bg-[#120B1F]/35 border-zinc-800/80 shadow-2xl'
            }`}
          >
            <h3 className={`text-lg font-serif font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
              <Mail className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
              <span>{text.formTitle}</span>
            </h3>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 text-center space-y-4"
              >
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
                <p className={`text-sm font-semibold ${theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}`}>
                  {text.successMsg}
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className={`px-4 py-2 text-xs font-mono rounded-full border transition-all ${
                    theme === 'light'
                      ? 'border-[#F872EE] text-[#4A3F3A] hover:bg-[#F872EE]/10'
                      : 'border-zinc-800 text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  {language === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                    {text.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                      theme === 'light'
                        ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                        : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                    {text.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                      theme === 'light'
                        ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                        : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                    {text.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-none ${
                      theme === 'light'
                        ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                        : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 mt-2 rounded-full font-semibold text-sm transition-all duration-150 active:scale-95 hover:scale-105 hover:brightness-110 flex items-center justify-center gap-2 ${
                    theme === 'light'
                      ? 'btn-gradient shadow-md'
                      : 'bg-[#8b5cf6] text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:shadow-[0_0_28px_rgba(217,70,239,0.6)]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? text.sending : text.sendButton}</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Calendly-style Interactive Calendar Scheduler */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-6"
          >
            <h3 className={`text-lg font-serif font-bold mb-1 flex items-center gap-2 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
              <Calendar className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
              <span>{text.scheduleTitle}</span>
            </h3>
            <p className={`text-xs leading-relaxed mb-6 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
              {text.scheduleSubtitle}
            </p>

            {/* Calendar Widget - naturally integrated, visually blending with background */}
            <div className="py-2 mb-6 bg-transparent border-none">
              {/* Header: Month / Nav */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-serif font-bold ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                  {text.months[calendarMonth]} {calendarYear}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={prevMonth}
                    className={`p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-current`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className={`p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-current`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day of week headers */}
              <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] uppercase font-bold text-zinc-500 mb-2">
                {text.daysOfWeek.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>

              {/* Calendar Days Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty buffer */}
                {Array.from({ length: firstDayIndex }).map((_, idx) => (
                  <div key={`empty-${idx}`} />
                ))}

                {/* Days list */}
                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isSelected = selectedDay === dayNum;
                  const isPast = calendarMonth === now.getMonth() && calendarYear === now.getFullYear() && dayNum < now.getDate();
                  
                  return (
                    <button
                      key={dayNum}
                      disabled={isPast}
                      onClick={() => {
                        setSelectedDay(dayNum);
                        setSelectedTimeSlot(null);
                      }}
                      className={`h-8 rounded-lg font-mono text-xs font-semibold flex items-center justify-center transition-all ${
                        isPast
                          ? 'opacity-20 cursor-not-allowed'
                          : isSelected
                            ? theme === 'light'
                              ? 'bg-[#F872EE] text-white shadow-sm'
                              : 'bg-purple-500 text-white'
                            : theme === 'light'
                              ? 'hover:bg-[#F872EE]/20 text-[#4A3F3A]'
                              : 'hover:bg-white/5 text-zinc-300 hover:text-purple-400'
                      }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selector */}
            {selectedDay && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                  {text.slotsTitle} {selectedDay} de {text.months[calendarMonth]}
                </h4>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-1 text-center font-mono text-[10px] sm:text-xs rounded-lg font-semibold border transition-all ${
                          isSelected
                            ? theme === 'light'
                              ? 'bg-[#4A3F3A] text-white border-transparent'
                              : 'bg-purple-500 text-white border-transparent shadow-md shadow-purple-500/10'
                            : theme === 'light'
                              ? 'border-[#F872EE]/30 hover:bg-[#F872EE]/10 text-[#4A3F3A]'
                              : 'border-zinc-800 hover:border-purple-500/30 hover:bg-white/5 text-zinc-300'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => selectedTimeSlot && setIsBookingModalOpen(true)}
                  disabled={!selectedTimeSlot}
                  className={`w-full py-3.5 mt-4 rounded-full font-semibold text-sm transition-all duration-150 active:scale-95 hover:scale-105 hover:brightness-110 flex items-center justify-center gap-2 ${
                    !selectedTimeSlot
                      ? 'opacity-40 cursor-not-allowed bg-zinc-300 dark:bg-zinc-800/80 text-zinc-500'
                      : theme === 'light'
                        ? 'btn-gradient shadow-md'
                        : 'bg-gradient-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6] text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:shadow-[0_0_28px_rgba(217,70,239,0.6)]'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>{text.confirmBtn}</span>
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Confirmation Booking Modal Popup */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className={`relative max-w-md w-full p-6 sm:p-8 rounded-3xl border z-10 shadow-2xl ${
                theme === 'light'
                  ? 'bg-[#FDFBF7] border-[#F872EE]/50 text-[#4A3F3A]'
                  : 'bg-[#120B1F] border-zinc-800 text-white'
              }`}
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-zinc-400 hover:text-current transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className={`text-xl font-serif font-bold mb-2 flex items-center gap-2 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                <Clock className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
                <span>{text.modalTitle}</span>
              </h3>
              
              {/* Selections brief review with clear text colors in Light and Dark Mode */}
              <div className={`p-4 rounded-xl text-xs sm:text-sm mb-6 ${
                theme === 'light' ? 'bg-[#F872EE]/10 border border-[#F872EE]/25 text-[#4A3F3A]' : 'bg-purple-500/10 border border-purple-500/20 text-purple-300'
              }`}>
                <p className="font-semibold text-current">
                  {language === 'pt' ? 'Data:' : 'Date:'}{' '}
                  <span className={`font-mono font-bold ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-fuchsia-300'}`}>
                    {selectedDay} de {text.months[calendarMonth]} de {calendarYear}
                  </span>
                </p>
                <p className="font-semibold mt-1 text-current">
                  {language === 'pt' ? 'Horário:' : 'Time:'}{' '}
                  <span className={`font-mono font-bold ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-fuchsia-300'}`}>
                    {selectedTimeSlot}
                  </span>
                </p>
              </div>

              {isMeetBooked ? (
                <div className="p-4 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <p className="text-sm font-semibold">{text.modalSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleBookMeet} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                      {text.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={meetName}
                      onChange={(e) => setMeetName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                        theme === 'light'
                          ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                          : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                      {text.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={meetEmail}
                      onChange={(e) => setMeetEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                        theme === 'light'
                          ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                          : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                      {text.reasonLabel} *
                    </label>
                    <select
                      required
                      value={meetReason}
                      onChange={(e) => setMeetReason(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none appearance-none ${
                        theme === 'light'
                          ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                          : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${theme === 'light' ? '%234A3F3A' : '%23FFFFFF'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        backgroundSize: '16px'
                      }}
                    >
                      <option value="" disabled>
                        {language === 'pt' ? 'Selecione o motivo' : 'Select a reason'}
                      </option>
                      {text.reasons.map((opt: string) => (
                        <option key={opt} value={opt} className={theme === 'light' ? 'text-[#4A3F3A] bg-[#FDFBF7]' : 'text-white bg-[#120B1F]'}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <AnimatePresence>
                    {meetReason === text.reasons[6] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
                          {language === 'pt' ? 'Especifique o Motivo *' : 'Specify Reason *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={meetCustomReason}
                          onChange={(e) => setMeetCustomReason(e.target.value)}
                          placeholder={language === 'pt' ? 'Digite o motivo...' : 'Enter your reason...'}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                            theme === 'light'
                              ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
                              : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white'
                          }`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    className={`w-full py-3.5 mt-2 rounded-full font-semibold text-sm transition-all duration-150 active:scale-95 hover:scale-105 hover:brightness-110 flex items-center justify-center gap-2 ${
                      theme === 'light'
                        ? 'btn-gradient shadow-md'
                        : 'bg-[#8b5cf6] text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:shadow-[0_0_28px_rgba(217,70,239,0.6)]'
                    }`}
                  >
                    <span>{text.modalConfirmBtn}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
