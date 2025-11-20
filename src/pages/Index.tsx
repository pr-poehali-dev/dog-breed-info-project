import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DogBreed {
  id: string;
  name: string;
  image: string;
  father: string;
  mother: string;
  lifespan: string;
  character: string[];
  features: string[];
  description: string;
}

const breeds: DogBreed[] = [
  {
    id: 'maltipoo',
    name: 'Мальтипу',
    image: 'https://cdn.poehali.dev/projects/7c958e48-1a53-4955-a485-ab80ace52354/files/a3220c53-1550-4028-9de3-eaf3bf38ec14.jpg',
    father: '🐩 Пудель',
    mother: '🦴 Мальтийская болонка',
    lifespan: '12-15 лет',
    character: ['Ласковый', 'Игривый', 'Умный', 'Общительный'],
    features: ['Гипоаллергенная шерсть', 'Компактный размер', 'Отлично подходит для квартиры'],
    description: 'Идеальный компаньон для семьи и городской жизни'
  },
  {
    id: 'labradoodle',
    name: 'Лабрадудль',
    image: 'https://cdn.poehali.dev/projects/7c958e48-1a53-4955-a485-ab80ace52354/files/c3c684bb-283a-42ba-b4cc-9b8836ec409a.jpg',
    father: '🐩 Пудель',
    mother: '🦮 Лабрадор',
    lifespan: '12-14 лет',
    character: ['Дружелюбный', 'Энергичный', 'Обучаемый', 'Преданный'],
    features: ['Отличный пловец', 'Подходит для терапии', 'Активный образ жизни'],
    description: 'Энергичный и преданный друг для активной семьи'
  },
  {
    id: 'pugalier',
    name: 'Пуделетой',
    image: 'https://cdn.poehali.dev/projects/7c958e48-1a53-4955-a485-ab80ace52354/files/9bfec11a-5e20-485e-bafd-c6bdabbe033c.jpg',
    father: '🐕 Кавалер Кинг Чарльз Спаниель',
    mother: '🐶 Мопс',
    lifespan: '10-13 лет',
    character: ['Нежный', 'Спокойный', 'Любвеобильный', 'Послушный'],
    features: ['Компактный размер', 'Минимальная линька', 'Подходит для пожилых людей'],
    description: 'Спокойный и нежный компаньон для уютной жизни'
  }
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/20 to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            Современные Породы Собак
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте о дизайнерских породах, их происхождении и особенностях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {breeds.map((breed, index) => (
            <Card
              key={breed.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-scale-in border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedBreed(selectedBreed === breed.id ? null : breed.id)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{breed.name}</h2>
                  <p className="text-sm opacity-90">{breed.description}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-6 bg-muted/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-center flex-1">
                      <div className="text-2xl mb-1">{breed.father.split(' ')[0]}</div>
                      <div className="text-xs font-semibold text-primary">ОТЕЦ</div>
                      <div className="text-sm text-muted-foreground">{breed.father.split(' ').slice(1).join(' ')}</div>
                    </div>
                    <div className="mx-4">
                      <Icon name="Heart" className="text-red-500 animate-pulse" size={24} />
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-2xl mb-1">{breed.mother.split(' ')[0]}</div>
                      <div className="text-xs font-semibold text-primary">МАТЬ</div>
                      <div className="text-sm text-muted-foreground">{breed.mother.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-3 border-t border-border">
                    <Icon name="ArrowDown" className="text-primary" size={20} />
                  </div>
                  <div className="text-center mt-3">
                    <div className="font-bold text-lg text-primary">{breed.name}</div>
                  </div>
                </div>

                {selectedBreed === breed.id && (
                  <div className="space-y-4 animate-accordion-down">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" className="text-primary" size={18} />
                      <span className="font-semibold">Продолжительность жизни:</span>
                      <span className="text-muted-foreground">{breed.lifespan}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Smile" className="text-primary" size={18} />
                        <span className="font-semibold text-sm">Характер:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {breed.character.map((trait) => (
                          <Badge key={trait} variant="secondary" className="text-xs">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Sparkles" className="text-primary" size={18} />
                        <span className="font-semibold text-sm">Особенности:</span>
                      </div>
                      <ul className="space-y-1">
                        {breed.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <button
                  className="w-full mt-4 py-2 text-sm font-semibold text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBreed(selectedBreed === breed.id ? null : breed.id);
                  }}
                >
                  {selectedBreed === breed.id ? 'Скрыть детали' : 'Узнать больше'}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-secondary/30 to-muted/30 border-2">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Info" className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">О дизайнерских породах</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Дизайнерские породы — это результат целенаправленного скрещивания двух чистокровных пород для получения 
              собак с лучшими качествами обоих родителей. Эти породы часто обладают улучшенным здоровьем, 
              уникальным характером и гипоаллергенными свойствами, что делает их идеальными компаньонами для современной жизни.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
