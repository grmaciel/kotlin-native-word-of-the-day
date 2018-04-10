#import <Foundation/Foundation.h>

@class KCCCoolStuff, KCCDateTime, KCCWordUseCase, KCCWordOfTheDay, KCCWordOfTheDayInMemoryRepository, KCCStdlibPair;

@protocol KCCWordRepository;

NS_ASSUME_NONNULL_BEGIN

@interface KotlinBase : NSObject
-(instancetype) init __attribute__((unavailable));
+(instancetype) new __attribute__((unavailable));
+(void)initialize __attribute__((objc_requires_super));
@end;

@interface KotlinBase (KotlinBaseCopying) <NSCopying>
@end;

__attribute__((objc_runtime_name("KotlinMutableSet")))
@interface KCCMutableSet<ObjectType> : NSMutableSet<ObjectType>
@end;

__attribute__((objc_runtime_name("KotlinMutableDictionary")))
@interface KCCMutableDictionary<KeyType, ObjectType> : NSMutableDictionary<KeyType, ObjectType>
@end;

__attribute__((objc_subclassing_restricted))
@interface KCCCoolStuff : KotlinBase
-(instancetype)init NS_SWIFT_NAME(init()) NS_DESIGNATED_INITIALIZER;

-(NSString*)cool NS_SWIFT_NAME(cool());
@end;

__attribute__((objc_subclassing_restricted))
@interface KCCDateTime : KotlinBase
-(instancetype)init NS_SWIFT_NAME(init()) NS_DESIGNATED_INITIALIZER;

-(NSString*)formatDate NS_SWIFT_NAME(formatDate());
@end;

__attribute__((objc_subclassing_restricted))
@interface KCCWordUseCase : KotlinBase
-(instancetype)initWithDateTime:(KCCDateTime*)dateTime NS_SWIFT_NAME(init(dateTime:)) NS_DESIGNATED_INITIALIZER;

-(KCCWordOfTheDay*)wordOfTheDay NS_SWIFT_NAME(wordOfTheDay());
@property (readonly) KCCWordOfTheDayInMemoryRepository* repository;
@property (readonly) KCCDateTime* dateTime;
@end;

@protocol KCCWordRepository
@required
-(KCCStdlibPair*)wordOfTheDay NS_SWIFT_NAME(wordOfTheDay());
@end;

__attribute__((objc_subclassing_restricted))
@interface KCCWordOfTheDayInMemoryRepository : KotlinBase <KCCWordRepository>
-(instancetype)init NS_SWIFT_NAME(init()) NS_DESIGNATED_INITIALIZER;

@end;

__attribute__((objc_subclassing_restricted))
@interface KCCWordOfTheDay : KotlinBase
-(instancetype)initWithDay:(NSString*)day word:(NSString*)word description:(NSString*)description NS_SWIFT_NAME(init(day:word:description:)) NS_DESIGNATED_INITIALIZER;

-(NSString*)component1 NS_SWIFT_NAME(component1());
-(NSString*)component2 NS_SWIFT_NAME(component2());
-(NSString*)component3 NS_SWIFT_NAME(component3());
-(KCCWordOfTheDay*)doCopyDay:(NSString*)day word:(NSString*)word description:(NSString*)description NS_SWIFT_NAME(doCopy(day:word:description:));
@property (readonly) NSString* day;
@property (readonly) NSString* word;
@property (getter=description_, readonly) NSString* description;
@end;

__attribute__((objc_subclassing_restricted))
@interface KCCStdlibPair : KotlinBase
-(instancetype)initWithFirst:(id _Nullable)first second:(id _Nullable)second NS_SWIFT_NAME(init(first:second:)) NS_DESIGNATED_INITIALIZER;

-(id _Nullable)component1 NS_SWIFT_NAME(component1());
-(id _Nullable)component2 NS_SWIFT_NAME(component2());
-(KCCStdlibPair*)doCopyFirst:(id _Nullable)first second:(id _Nullable)second NS_SWIFT_NAME(doCopy(first:second:));
@property (readonly) id _Nullable first;
@property (readonly) id _Nullable second;
@end;

NS_ASSUME_NONNULL_END
