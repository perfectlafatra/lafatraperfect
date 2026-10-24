import { experience } from '../../content/experience';
import type { Locale } from '../../routes/publicRoutes';

export function Timeline({ locale }: { locale: Locale }) {
  return <ol className="timeline">{experience.map((item, index) => <li key={item.key}><span className="timeline__number">0{index + 1}</span><div><h2>{item.title[locale]}</h2><p>{item.description[locale]}</p><small>{item.date[locale]}</small></div></li>)}</ol>;
}

