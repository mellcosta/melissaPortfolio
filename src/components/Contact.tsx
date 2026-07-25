import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { ContactForm, type ContactFormValues } from './contact/ContactForm';
import { MeetingBooking, type MeetingType } from './contact/MeetingBooking';
import { Toast, type ToastState } from './contact/Toast';

interface ContactLocalizedContent {
  pt: {
    subtitle: string;
    title: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMsg: string;
    errorMsg: string;
    meetingTitle: string;
    meetingSubtitle: string;
    quickChat: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    letsTalk: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    calendarHint: string;
    meetingLoading: string;
  };
  en: {
    subtitle: string;
    title: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMsg: string;
    errorMsg: string;
    meetingTitle: string;
    meetingSubtitle: string;
    quickChat: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    letsTalk: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    calendarHint: string;
    meetingLoading: string;
  };
  es: {
    subtitle: string;
    title: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMsg: string;
    errorMsg: string;
    meetingTitle: string;
    meetingSubtitle: string;
    quickChat: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    letsTalk: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    calendarHint: string;
    meetingLoading: string;
  };
  ru: {
    subtitle: string;
    title: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMsg: string;
    errorMsg: string;
    meetingTitle: string;
    meetingSubtitle: string;
    quickChat: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    letsTalk: {
      title: string;
      duration: string;
      description: string;
      cta: string;
    };
    calendarHint: string;
    meetingLoading: string;
  };
}

interface EmailConfig {
  publicKey?: string;
  serviceId?: string;
  contactTemplateId?: string;
  autoreplyTemplateId?: string;
}

const getEmailConfig = (): EmailConfig => ({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  autoreplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
});

const getCalendarLink = (username?: string, slug?: string): string => {
  if (!username || !slug) {
    return '';
  }

  return `https://cal.com/${username}/${slug}`;
};

const formatDateTime = (): string =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date());

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const toastIdRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const localizedContent = useMemo<ContactLocalizedContent>(
    () => ({
      pt: {
        subtitle: 'Entre em contato ou agende uma conversa diretamente no meu calendário',
        title: 'Fale Comigo',
        formTitle: 'Envie uma mensagem',
        nameLabel: 'Nome completo',
        emailLabel: 'E-mail',
        messageLabel: 'Mensagem',
        sendButton: 'Enviar Mensagem',
        sending: 'Enviando...',
        successMsg: 'Mensagem enviada com sucesso. Responderei em breve.',
        errorMsg: 'Não foi possível enviar sua mensagem. Tente novamente.',
        meetingTitle: 'Agendar Reunião',
        meetingSubtitle: 'Escolha o tipo de conversa que faz mais sentido para o momento.',
        quickChat: {
          title: 'Quick Chat',
          duration: '15 minutos',
          description: 'Perfeito para perguntas rápidas, apresentações, networking ou uma primeira conversa.',
          cta: 'Select',
        },
        letsTalk: {
          title: "Let's Talk",
          duration: '30 minutos',
          description: 'Vamos falar sobre oportunidades, colaborações, projetos, estágio ou qualquer assunto tech.',
          cta: 'Select',
        },
        calendarHint: 'O widget de agendamento aparece abaixo e muda suavemente ao selecionar um tipo de reunião.',
        meetingLoading: 'Carregando agenda do Cal.com...',
      },
      en: {
        subtitle: 'Get in touch or book a conversation directly in my calendar',
        title: 'Contact Me',
        formTitle: 'Send a Message',
        nameLabel: 'Full Name',
        emailLabel: 'Email Address',
        messageLabel: 'Message',
        sendButton: 'Send Message',
        sending: 'Sending...',
        successMsg: 'Message sent successfully. I will get back to you shortly.',
        errorMsg: 'Something went wrong while sending your message. Please try again.',
        meetingTitle: 'Schedule a Meeting',
        meetingSubtitle: 'Choose the conversation format that fits best right now.',
        quickChat: {
          title: 'Quick Chat',
          duration: '15 minutes',
          description: 'Perfect for quick questions, introductions, networking, or a first conversation.',
          cta: 'Select',
        },
        letsTalk: {
          title: "Let's Talk",
          duration: '30 minutes',
          description: 'Let’s discuss opportunities, collaborations, projects, internships, or anything tech.',
          cta: 'Select',
        },
        calendarHint: 'The booking widget appears below and changes smoothly when you switch meeting types.',
        meetingLoading: 'Loading Cal.com booking widget...',
      },
      es: {
        subtitle: 'Ponte en contacto o reserva una conversación directamente en mi calendario',
        title: 'Contacto',
        formTitle: 'Enviar Mensaje',
        nameLabel: 'Nombre completo',
        emailLabel: 'Correo electrónico',
        messageLabel: 'Mensaje',
        sendButton: 'Enviar Mensaje',
        sending: 'Enviando...',
        successMsg: 'Mensaje enviado con éxito. Te responderé en breve.',
        errorMsg: 'No se pudo enviar tu mensaje. Inténtalo nuevamente.',
        meetingTitle: 'Programar Reunión',
        meetingSubtitle: 'Elige el formato de conversación que mejor encaje ahora.',
        quickChat: {
          title: 'Quick Chat',
          duration: '15 minutos',
          description: 'Perfecto para preguntas rápidas, presentaciones, networking o una primera conversación.',
          cta: 'Select',
        },
        letsTalk: {
          title: "Let's Talk",
          duration: '30 minutos',
          description: 'Hablemos de oportunidades, colaboraciones, proyectos, prácticas o cualquier tema tech.',
          cta: 'Select',
        },
        calendarHint: 'El widget de reservas aparece abajo y cambia suavemente cuando eliges un tipo de reunión.',
        meetingLoading: 'Cargando el widget de reservas de Cal.com...',
      },
      ru: {
        subtitle: 'Свяжитесь со мной или забронируйте разговор прямо в календаре',
        title: 'Контакты',
        formTitle: 'Отправить сообщение',
        nameLabel: 'Полное имя',
        emailLabel: 'Электронная почта',
        messageLabel: 'Сообщение',
        sendButton: 'Отправить сообщение',
        sending: 'Отправка...',
        successMsg: 'Сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.',
        errorMsg: 'Не удалось отправить сообщение. Попробуйте еще раз.',
        meetingTitle: 'Запланировать встречу',
        meetingSubtitle: 'Выберите формат разговора, который подходит прямо сейчас.',
        quickChat: {
          title: 'Quick Chat',
          duration: '15 минут',
          description: 'Подходит для быстрых вопросов, знакомства, нетворкинга или первой беседы.',
          cta: 'Select',
        },
        letsTalk: {
          title: "Let's Talk",
          duration: '30 минут',
          description: 'Обсудим возможности, сотрудничество, проекты, стажировки или любые tech-вопросы.',
          cta: 'Select',
        },
        calendarHint: 'Виджет бронирования появляется ниже и плавно меняется при выборе типа встречи.',
        meetingLoading: 'Загрузка виджета бронирования Cal.com...',
      },
    }),
    []
  );

  const text = localizedContent[language] ?? localizedContent.en;
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingType>('quick-chat');
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    const config = getEmailConfig();
    if (config.publicKey) {
      emailjs.init({ publicKey: config.publicKey });
    }
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setToast(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const showToast = (kind: ToastState['kind'], message: string) => {
    toastIdRef.current += 1;
    const nextToast: ToastState = {
      id: toastIdRef.current,
      kind,
      message,
    };
    setToast(nextToast);
    window.setTimeout(() => {
      setToast((current) => (current?.id === nextToast.id ? null : current));
    }, 4200);
  };

  const handleFieldChange = (field: keyof ContactFormValues, value: string) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({ name: '', email: '', message: '' });
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const message = formValues.message.trim();

    if (!name || !email || !message) {
      showToast('error', text.errorMsg);
      return;
    }

    const config = getEmailConfig();
    if (!config.publicKey || !config.serviceId || !config.contactTemplateId || !config.autoreplyTemplateId) {
      showToast('error', text.errorMsg);
      return;
    }

    setIsSubmitting(true);

    try {
      const sharedPayload = {
        name,
        email,
        message,
        date_time: formatDateTime(),
      };

      await emailjs.send(config.serviceId, config.contactTemplateId, sharedPayload, {
        publicKey: config.publicKey,
      });

      await emailjs.send(config.serviceId, config.autoreplyTemplateId, sharedPayload, {
        publicKey: config.publicKey,
      });

      if (!mountedRef.current) {
        return;
      }

      resetForm();
      showToast('success', text.successMsg);
    } catch {
      if (mountedRef.current) {
        showToast('error', text.errorMsg);
      }
    } finally {
      if (mountedRef.current) {
        setIsSubmitting(false);
      }
    }
  };

  const calUsername = import.meta.env.VITE_CAL_USERNAME as string | undefined;
  const quickChatSlug = import.meta.env.VITE_CAL_15MIN_SLUG as string | undefined;
  const letsTalkSlug = import.meta.env.VITE_CAL_30MIN_SLUG as string | undefined;

  const calLinks = {
    'quick-chat': getCalendarLink(calUsername, quickChatSlug),
    'lets-talk': getCalendarLink(calUsername, letsTalkSlug),
  } satisfies Record<MeetingType, string>;

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div
            className={`w-24 h-1 mx-auto mt-4 mb-6 rounded-full ${
              theme === 'light'
                ? 'bg-linear-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF]'
                : 'bg-linear-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]'
            }`}
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className={`text-xs sm:text-sm max-w-xl mx-auto ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}
          >
            {text.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactForm
            theme={theme}
            title={text.formTitle}
            nameLabel={text.nameLabel}
            emailLabel={text.emailLabel}
            messageLabel={text.messageLabel}
            submitLabel={text.sendButton}
            sendingLabel={text.sending}
            values={formValues}
            onChange={handleFieldChange}
            onSubmit={handleContactSubmit}
            isSubmitting={isSubmitting}
          />

          <MeetingBooking
            theme={theme}
            title={text.meetingTitle}
            subtitle={text.meetingSubtitle}
            quickChat={{
              id: 'quick-chat',
              ...text.quickChat,
            }}
            letsTalk={{
              id: 'lets-talk',
              ...text.letsTalk,
            }}
            selectedMeeting={selectedMeeting}
            onSelectMeeting={setSelectedMeeting}
            calOrigin="https://cal.com"
            calLink={calLinks[selectedMeeting]}
            loadingLabel={text.meetingLoading}
          />
        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} theme={theme} />
    </section>
  );
};
