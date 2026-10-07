import React, { useState } from 'react';
import { EducationalOffering, OfferingPlan } from '../../../types/offering.ts';
import { offeringsService } from '../../../services/offerings/offeringsService.ts';
import { useI18n } from '../../../context/I18nContext.tsx';
import { M3Dialog } from '../../../design-system/m3/components/M3Dialog.tsx';
import { M3Button } from '../../../design-system/m3/components/M3Button.tsx';
import { M3TextField } from '../../../design-system/m3/components/M3TextField.tsx';
import { useToast } from '../../../context/ToastContext.tsx';
import { CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  offering: EducationalOffering | null;
  selectedPlan?: OfferingPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  offering,
  selectedPlan,
  isOpen,
  onClose,
}) => {
  const { showToast } = useToast();
  const { t } = useI18n();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!offering) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      showToast(t('booking.nameLabel') + ' & ' + t('booking.emailLabel'), 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      offeringsService.submitConsultationRequest({
        fullName,
        email,
        phone,
        offeringId: offering.id,
        offeringTitle: offering.title,
        preferredPlan: selectedPlan?.name,
        message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      showToast(t('booking.successTitle'), 'success');
    } catch {
      setIsSubmitting(false);
      showToast(t('common.retry'), 'error');
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <M3Dialog
      isOpen={isOpen}
      onClose={handleReset}
      title={isSuccess ? t('booking.successTitle') : t('booking.modalTitle')}
      subtitle={isSuccess ? undefined : `${offering.title}${selectedPlan ? ` · ${selectedPlan.name}` : ''}`}
      maxWidth="md"
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-[20px] font-normal text-[var(--md-sys-color-on-surface)]">
            {t('booking.successTitle')}
          </h3>
          <p className="text-[13px] text-[var(--md-sys-color-on-surface-variant)] max-w-sm mx-auto leading-relaxed">
            {t('booking.successSubtitle')} <span className="font-semibold text-[var(--md-sys-color-on-surface)]">{email}</span>
          </p>
          <div className="pt-4">
            <M3Button variant="filled" onClick={handleReset} fullWidth>
              {t('booking.closeBtn')}
            </M3Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <M3TextField
            label={`${t('booking.nameLabel')} *`}
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            placeholder={t('booking.namePlaceholder')}
          />

          <M3TextField
            label={`${t('booking.emailLabel')} *`}
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('booking.emailPlaceholder')}
          />

          <M3TextField
            label={t('booking.phoneLabel')}
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={t('booking.phonePlaceholder')}
          />

          <div className="pt-2">
            <label className="block text-[12px] font-medium text-[var(--md-sys-color-on-surface-variant)] mb-1.5">
              {t('booking.messageLabel')}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={t('booking.messagePlaceholder')}
              className="w-full px-4 py-2.5 text-[14px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline)] rounded-[var(--radius-input,12px)] text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)]/60 focus:outline-hidden focus:border-[var(--md-sys-color-primary)]"
            />
          </div>

          <div className="pt-2">
            <M3Button
              type="submit"
              variant="filled"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? t('common.submitting') : t('booking.submitBtn')}
            </M3Button>
            <p className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] text-center mt-2.5">
              NextSelf · {t('footer.confidentiality')}
            </p>
          </div>
        </form>
      )}
    </M3Dialog>
  );
};
