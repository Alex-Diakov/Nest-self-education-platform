import React from 'react';
import { UserAssessmentResult } from '../../../types/test.ts';
import { useI18n } from '../../../context/I18nContext.tsx';
import { M3Dialog } from '../../../design-system/m3/components/M3Dialog.tsx';
import { M3Button } from '../../../design-system/m3/components/M3Button.tsx';
import { Award, Printer, Share2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../../context/ToastContext.tsx';

interface CertificateModalProps {
  result: UserAssessmentResult | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  result,
  isOpen,
  onClose,
}) => {
  const { language } = useI18n();
  const { showToast } = useToast();

  if (!result) return null;

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(
        `NextSelf Verified Credential | ${result.testTitle} — Score: ${result.scorePercent}% (ID: ${result.certificateId})`
      );
      showToast(
        language === 'en'
          ? 'Certificate ID copied to clipboard'
          : language === 'ru'
          ? 'Номер сертификата скопирован'
          : 'Номер сертифіката скопійовано',
        'success'
      );
    }
  };

  const formattedDate = new Date(result.completedAt).toLocaleDateString(
    language === 'en' ? 'en-US' : language === 'ru' ? 'ru-RU' : 'uk-UA',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <M3Dialog isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      <div className="space-y-6">
        {/* Certificate Parchment Surface */}
        <div
          id="printable-certificate"
          className="relative bg-gradient-to-b from-[#FAF8F5] to-[#F3EFEA] dark:from-[#1E1B18] dark:to-[#171512] text-[#1E1B18] dark:text-[#F3EFEA] p-6 sm:p-12 rounded-[24px] border-2 border-[#D8C7B5] dark:border-[#3D352E] shadow-2xl space-y-6 text-center select-none"
        >
          {/* Subtle Guilloche / Border Inset */}
          <div className="absolute inset-2 sm:inset-3 border border-[#D8C7B5]/60 dark:border-[#3D352E]/60 rounded-[18px] pointer-events-none" />

          {/* Top Crest / Header */}
          <div className="space-y-2 relative z-10">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#1E1B18] text-[#F3EFEA] dark:bg-[#F3EFEA] dark:text-[#1E1B18] flex items-center justify-center shadow-md">
              <Award className="w-8 h-8 stroke-[1.75]" />
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C7A6B] dark:text-[#B0A294]">
              NextSelf · Psychotechnology & Profiling Lab
            </div>
            <h2 className="text-[22px] sm:text-[28px] font-serif font-bold tracking-tight text-[#1E1B18] dark:text-[#F3EFEA]">
              {language === 'en'
                ? 'Certificate of Verified Mastery'
                : language === 'ru'
                ? 'Сертификат подтвержденной квалификации'
                : 'Сертифікат верифікованої кваліфікації'}
            </h2>
          </div>

          {/* Statement */}
          <div className="space-y-2 max-w-lg mx-auto relative z-10">
            <p className="text-[13px] sm:text-[14px] text-[#5C5046] dark:text-[#C5B9AC] italic">
              {language === 'en'
                ? 'This credential formally attests that the practitioner has demonstrated measurable cognitive resilience and diagnostic precision in:'
                : language === 'ru'
                ? 'Настоящий документ подтверждает успешное прохождение психометрической диагностики и демонстрацию когнитивной устойчивости в дисциплине:'
                : 'Цей документ офіційно засвідчує успішне проходження психометричної діагностики та демонстрацію когнітивної стійкості в дисципліні:'}
            </p>
            <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#1E1B18] dark:text-[#F3EFEA] font-serif py-1">
              {result.testTitle}
            </h3>
          </div>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto relative z-10 text-xs font-mono">
            <div className="p-3 rounded-[12px] bg-white/70 dark:bg-black/30 border border-[#D8C7B5]/60 dark:border-[#3D352E]">
              <span className="block text-[10px] uppercase text-[#8C7A6B] dark:text-[#B0A294]">
                {language === 'en' ? 'Score' : language === 'ru' ? 'Результат' : 'Результат'}
              </span>
              <span className="text-[18px] font-bold text-emerald-700 dark:text-emerald-400">
                {result.scorePercent}%
              </span>
            </div>
            <div className="p-3 rounded-[12px] bg-white/70 dark:bg-black/30 border border-[#D8C7B5]/60 dark:border-[#3D352E]">
              <span className="block text-[10px] uppercase text-[#8C7A6B] dark:text-[#B0A294]">
                {language === 'en' ? 'Questions' : language === 'ru' ? 'Вопросов' : 'Питань'}
              </span>
              <span className="text-[18px] font-bold text-[#1E1B18] dark:text-[#F3EFEA]">
                {result.correctAnswersCount}/{result.totalQuestions}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 rounded-[12px] bg-white/70 dark:bg-black/30 border border-[#D8C7B5]/60 dark:border-[#3D352E]">
              <span className="block text-[10px] uppercase text-[#8C7A6B] dark:text-[#B0A294]">
                {language === 'en' ? 'Status' : language === 'ru' ? 'Статус' : 'Статус'}
              </span>
              <span className="text-[14px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Verified' : language === 'ru' ? 'Сдано' : 'Верифіковано'}</span>
              </span>
            </div>
          </div>

          {/* Verification Footer & Signatures */}
          <div className="pt-6 border-t border-[#D8C7B5]/60 dark:border-[#3D352E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10">
            <div className="text-left font-mono">
              <span className="block text-[10px] text-[#8C7A6B] dark:text-[#B0A294] uppercase">
                {language === 'en' ? 'Credential ID' : language === 'ru' ? 'Номер сертификата' : 'Ідентифікатор'}
              </span>
              <span className="font-bold text-[12px] text-[#1E1B18] dark:text-[#F3EFEA]">
                {result.certificateId}
              </span>
              <span className="block text-[11px] text-[#5C5046] dark:text-[#C5B9AC] mt-0.5">
                {formattedDate}
              </span>
            </div>

            <div className="text-right flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <div>
                <span className="block text-[12px] font-serif font-bold text-[#1E1B18] dark:text-[#F3EFEA]">
                  Олександр Дьяков
                </span>
                <span className="block text-[10px] text-[#8C7A6B] dark:text-[#B0A294]">
                  NextSelf Lab Director & Lead Profiler
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <M3Button
              variant="outlined"
              size="sm"
              onClick={handlePrint}
              icon={<Printer className="w-4 h-4" />}
            >
              {language === 'en' ? 'Print / Save PDF' : language === 'ru' ? 'Печать / Сохранить PDF' : 'Роздрукувати / PDF'}
            </M3Button>
            <M3Button
              variant="outlined"
              size="sm"
              onClick={handleShare}
              icon={<Share2 className="w-4 h-4" />}
            >
              {language === 'en' ? 'Copy Credential' : language === 'ru' ? 'Скопировать ID' : 'Скопіювати ID'}
            </M3Button>
          </div>

          <M3Button variant="filled" size="sm" onClick={onClose}>
            {language === 'en' ? 'Close' : language === 'ru' ? 'Закрыть' : 'Закрити'}
          </M3Button>
        </div>
      </div>
    </M3Dialog>
  );
};
