import { MapPin } from 'lucide-react';

export default function ContactAddressMap() {
  const businessName = 'TRUEVOLTS Research Center Pvt Ltd';
  const address = 'Flat No : A6 , 2nd floor, RS Brothers, Eureka Court Complex, Lane, above KS bakery, opp. :, Pratap Nagar, Nagarjuna Nagar colony, Ameerpet, Hyderabad, Telangana 500073';
  const mapQuery = encodeURIComponent('Flat No A6, 2nd floor, RS Brothers, Eureka Court Complex, Pratap Nagar, Ameerpet, Hyderabad, Telangana 500073');

  return (
    <div className="space-y-6">
      {/* Address Block */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
            <p className="text-base font-medium text-foreground mb-1">{businessName}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{address}</p>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <iframe
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TRUEVOLTS Research Center Location"
          className="w-full"
        />
      </div>
    </div>
  );
}
