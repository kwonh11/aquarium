import IconJeju from './icons/jeju-aqua-planet.png';
import IconYeosu from './icons/yeosu-aqua-planet.png';
import IconIlsan from './icons/ilsan-aqua-planet.png';
import Icon63 from './icons/63-aqua-planet.png';

export default (isLoading, clickHandler) => ([
    {
      index: 0,
      icon: IconJeju,
      title: 'JEJU',
      subtitle: '한화 아쿠아플라넷 제주',
      loaded: !isLoading,
      clickHandler,
      description: "제주의 바다를 담은 국내 최대 규모 아쿠아리움 | 아쿠아플라넷 제주",
      comment: "국내 최대 규모의 11m 초대형 수조에서 펼쳐지는 크고 작은 다양한 생물부터 유네스코 인류 무형문화유산에 등재된 제주 해녀의 감동을 바로 문앞에서 느껴보세요."
    },
    {
      index: 1,
      icon: IconYeosu,
      title: 'YEOSU',
      subtitle: '한화 아쿠아플라넷 여수',
      loaded: !isLoading,
      clickHandler,
      description: "인간과 자연이 공생하는 즐거움 | 아쿠아플라넷 여수",
      comment: "순수 국내 기술력으로 해양문화의 가치와 생태계 보존의 필요성을 널리 알리며 인간과 자연이 공생하며 느낄 수 있는 최고의 즐거움을 경험해보세요."
    },
    {
      index: 2,
      icon: IconIlsan,
      title: 'ILSAN',
      subtitle: '한화 아쿠아플라넷 일산',
      loaded: !isLoading,
      clickHandler,
      description: "도심 속 해저여행과 정글탐험 | 아쿠아 플라넷 일산",
      comment: "국내 최대 규모의 11m 초대형 수조에서 펼쳐지는 크고 작은 다양한 생물부터 유네스코 인류 무형문화유산에 등재된 제주 해녀의 감동을 바로 문앞에서 느껴보세요."
    },
    {
      index: 3,
      icon: Icon63,
      title: '63',
      subtitle: '한화 아쿠아플라넷 63',
      loaded: !isLoading,
      clickHandler,
      description: "도시에서 만나는 바닷속 인어이야기 | 아쿠아플라넷 63",
      comment: "서울 10대 명소로 선정된 아름다운 낮과 밤을 자랑하는 63빌딩의 전망과 함게 동화 속 인어공주가 내 눈앞에 펼쳐지는 아름다운 감동을 느껴보세요."
    },
    {
      index: 4,
      icon: '',
      title: 'GWANGGYO',
      subtitle: '2020년 12월|Grand Opening',
      loaded: !isLoading,
      clickHandler,
      description: "한화 아쿠아플라넷 광교",
      comment: "경기남부 최고의 아쿠아리움으로 곧 찾아뵙겠습니다!"
    },
  ])