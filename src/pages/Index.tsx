import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const filmography = [
    { year: '2020', title: 'Я знаю твои секреты', role: 'Артём', type: 'Сериал', director: 'Ашот Кещян' },
    { year: '2019', title: 'Хорошая жена', role: 'студент-прокурор', type: 'Сериал', director: 'Станислав Либин' },
    { year: '2019', title: 'Галка и Гамаюн', role: 'сын жертвы', type: 'Сериал', director: 'Андрей Силкин' },
    { year: '2018', title: 'Как я стал', role: 'друг главного героя', type: 'Полный метр', director: 'Павел Мирзоев' },
    { year: '2018', title: 'Т-34', role: 'узник концлагеря', type: 'Полный метр', director: 'Алексей Сидоров' },
    { year: '2017', title: 'Каждому своё', role: 'друг главного героя', type: 'Полный метр', director: 'Ольга Ланд' }
  ];

  const theater = [
    { year: '2025', title: 'Майский вальс', role: 'Борис Сичкин', director: 'Р. Аллахвердиев', theater: 'Москонцерт, АЯ' },
    { year: '2024', title: 'Бежин Луг', role: 'Илюша', director: 'И. Рудник', theater: 'Москонцерт, АЯ' },
    { year: '2023', title: 'Есенин', role: 'Есенин', director: 'Р. Аллахвердиев', theater: 'Москонцерт, АЯ' },
    { year: '2023', title: 'Ревизор', role: 'Бобчинский, Осип', director: 'И. Рудник', theater: 'Москонцерт, АЯ' },
    { year: '2023', title: 'Гамлет', role: 'Горацио', director: 'И. Рудник', theater: 'Москонцерт, АЯ' },
    { year: '2022', title: 'Поколение Маугли', role: 'Тоби', director: 'К. Ю. Хабенский', theater: 'ЦТРА, МХАТ' }
  ];

  const voiceWork = [
    { category: 'Дорамы', works: ['Плохой прокурор', 'Тайна', 'Турпакет', 'Красная луна, синее солнце', 'Больше, чем друзья', 'Роман ведьмы', 'Мышь', 'Рождение красавицы', 'Заколдованный дворец', 'Достоинство императрицы'] },
    { category: 'Сериалы', works: ['Под прикрытием', 'Профессионалы', 'Порус'] },
    { category: 'Фильмы', works: ['Особь', 'Траффик', 'Непокорённый'] }
  ];

  const skills = [
    { category: 'Музыкальные инструменты', items: ['фортепиано', 'аккордеон', 'флейта', 'гитара', 'электрогитара', 'бас-гитара', 'балалайка', 'ложки', 'кахон', 'BeatBox', 'DubPad', 'перскуссии'] },
    { category: 'Спорт', items: ['Футбол (профессионально)', 'шахматы (профессионально)', 'лёгкая атлетика (профессионально)', 'волейбол', 'баскетбол', 'гандбол', 'лыжи', 'настольный теннис', 'бадминтон'] },
    { category: 'Дополнительно', items: ['Художественное чтение', 'Художественное слово', 'Hip-Hop танцы', 'Английский язык (базовый)', 'Сольфеджио'] }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold text-primary">Артём Ямпольский</h1>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Биография', 'Фильмография', 'Театр', 'Озвучивание', 'Навыки', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                  Артём<br />
                  <span className="text-primary">Ямпольский</span>
                </h1>
                <p className="text-xl text-muted-foreground">Актёр театра и кино</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Выпускник ВГИК, мастерская В.В. Меньшова. Актёр с многогранным талантом — 
                  от драматических ролей до озвучивания, от классического театра до современного кино.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-primary border-primary">Возраст: 28</Badge>
                  <Badge variant="outline" className="text-primary border-primary">Рост: 173 см</Badge>
                  <Badge variant="outline" className="text-primary border-primary">ВГИК</Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('контакты')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('фильмография')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src="/img/7d3e78f8-6cb4-45da-846e-2b0d9eca0dcd.jpg" 
                  alt="Артём Ямпольский" 
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section id="биография" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Биография</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2 text-primary">Образование</h3>
                    <p className="text-muted-foreground">
                      Всероссийский Государственный Институт Кинематографии, г. Москва.<br />
                      Мастерская В. В. Меньшова.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2 text-primary">О профессии</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Обладатель Гран-При, лауреат международных и всероссийских фестивалей и конкурсов 
                      в номинации "Художественное чтение", "Художественное слово". Занимается озвучиванием 
                      подкастов, интервью, рекламы, документальных работ и даже был опыт озвучивания 
                      одной из веток Московского Метрополитена.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2 text-primary">Диапазон голоса</h3>
                    <p className="text-muted-foreground">Альт, баритон с нотками тенора</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filmography & Theater */}
      <section id="фильмография" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Портфолио</h2>
          
          <Tabs defaultValue="films" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="films" className="text-lg">Фильмография</TabsTrigger>
              <TabsTrigger value="theater" className="text-lg">Театр</TabsTrigger>
            </TabsList>

            <TabsContent value="films" className="space-y-4">
              {filmography.map((film, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="text-2xl font-playfair font-bold text-primary">{film.year}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{film.title}</h3>
                        <p className="text-sm text-muted-foreground">{film.type}</p>
                      </div>
                      <div>
                        <p className="text-primary font-medium">{film.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Реж. {film.director}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="theater" className="space-y-4" id="театр">
              {theater.map((play, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="text-2xl font-playfair font-bold text-primary">{play.year}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{play.title}</h3>
                        <p className="text-sm text-muted-foreground">{play.theater}</p>
                      </div>
                      <div>
                        <p className="text-primary font-medium">{play.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Реж. {play.director}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Voice Work */}
      <section id="озвучивание" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Озвучивание</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Mic" size={32} className="text-primary mr-3" />
                    <h3 className="text-xl font-playfair font-semibold">Образцы голоса</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Демо-записи доступны по запросу. Диапазон: альт, баритон с нотками тенора.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Icon name="Download" size={20} className="mr-2" />
                    Запросить демо
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {voiceWork.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-lg font-playfair hover:text-primary">
                    {category.category}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.works.map((work, workIndex) => (
                        <div key={workIndex} className="flex items-center">
                          <Icon name="CheckCircle2" size={16} className="text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{work}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="навыки" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Навыки</h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-2">
                    {skillCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <Icon name="Star" size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="контакты" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Контакты</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-playfair font-semibold mb-2">Ямпольский Артём Михайлович</h3>
                    <p className="text-muted-foreground">Актёр театра и кино</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="Phone" size={24} className="text-primary mr-4" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <a href="tel:+79154112809" className="text-primary hover:underline">
                          +7 915 411 28 09
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Icon name="Mail" size={24} className="text-primary mr-4" />
                      <div>
                        <p className="font-medium">Электронная почта</p>
                        <a href="mailto:temayam@gmail.com" className="text-primary hover:underline">
                          temayam@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Icon name="MapPin" size={24} className="text-primary mr-4" />
                      <div>
                        <p className="font-medium">Местоположение</p>
                        <p className="text-muted-foreground">Москва, Россия</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Icon name="User" size={24} className="text-primary mr-4" />
                      <div>
                        <p className="font-medium">Параметры</p>
                        <p className="text-muted-foreground">Возраст: 28, Рост: 173 см, Размер: 44-46 / M</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.location.href = 'mailto:temayam@gmail.com'}
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Написать письмо
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Артём Ямпольский. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;